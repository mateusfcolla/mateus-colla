<template>
  <div
    ref="containerRef"
    :class="[
      'glass-surface',
      supportsSvgBackdrop ? 'glass-surface--svg' : 'glass-surface--fallback',
      className
    ]"
    :style="containerStyle"
  >
    <svg class="glass-surface__filter" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter :id="filterId" color-interpolation-filters="sRGB" x="0%" y="0%" width="100%" height="100%">
          <feImage
            ref="feImageRef"
            x="0" y="0" width="100%" height="100%"
            preserveAspectRatio="none"
            result="map"
          />
          <feDisplacementMap ref="redChannelRef" in="SourceGraphic" in2="map" result="dispRed" />
          <feColorMatrix in="dispRed" type="matrix"
            values="1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
            result="red" />
          <feDisplacementMap ref="greenChannelRef" in="SourceGraphic" in2="map" result="dispGreen" />
          <feColorMatrix in="dispGreen" type="matrix"
            values="0 0 0 0 0
                    0 1 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
            result="green" />
          <feDisplacementMap ref="blueChannelRef" in="SourceGraphic" in2="map" result="dispBlue" />
          <feColorMatrix in="dispBlue" type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0"
            result="blue" />
          <feBlend in="red" in2="green" mode="screen" result="rg" />
          <feBlend in="rg" in2="blue" mode="screen" result="output" />
          <feGaussianBlur ref="gaussianBlurRef" in="output" stdDeviation="0.7" />
        </filter>
      </defs>
    </svg>

    <div class="glass-surface__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  width: { type: [Number, String], default: 200 },
  height: { type: [Number, String], default: 80 },
  borderRadius: { type: Number, default: 20 },
  borderWidth: { type: Number, default: 0.07 },
  brightness: { type: Number, default: 50 },
  opacity: { type: Number, default: 0.93 },
  blur: { type: Number, default: 11 },
  displace: { type: Number, default: 0 },
  backgroundOpacity: { type: Number, default: 0 },
  saturation: { type: Number, default: 1 },
  distortionScale: { type: Number, default: -180 },
  redOffset: { type: Number, default: 0 },
  greenOffset: { type: Number, default: 10 },
  blueOffset: { type: Number, default: 20 },
  xChannel: { type: String, default: 'R' },
  yChannel: { type: String, default: 'G' },
  mixBlendMode: { type: String, default: 'difference' },
  className: { type: String, default: '' },
  style: { type: Object, default: () => ({}) },

  maxUpdatesPerSec: { type: Number, default: 30 },
  lazy: { type: Boolean, default: true },
  displacementSrc: { type: String, default: '' }
})

const uid = Math.random().toString(36).slice(2)
const filterId = `glass-filter-${uid}`
const redGradId = `red-grad-${uid}`
const blueGradId = `blue-grad-${uid}`

const containerRef = ref(null)
const feImageRef = ref(null)
const redChannelRef = ref(null)
const greenChannelRef = ref(null)
const blueChannelRef = ref(null)
const gaussianBlurRef = ref(null)

const supportsSvgBackdrop = ref(false)

function detectSupportOnce () {
  try {
    const ua = navigator.userAgent
    if ((/Safari/.test(ua) && !/Chrome/.test(ua)) || /Firefox/.test(ua)) return false
    const div = document.createElement('div')
    div.style.backdropFilter = `url(#${filterId})`
    return div.style.backdropFilter !== ''
  } catch { return false }
}

const containerStyle = computed(() => {
  const w = typeof props.width === 'number' ? `${props.width}px` : props.width
  const h = typeof props.height === 'number' ? `${props.height}px` : props.height
  return {
    ...props.style,
    width: w,
    height: h,
    borderRadius: `${props.borderRadius}px`,
    '--glass-frost': props.backgroundOpacity,
    '--glass-saturation': props.saturation,
    '--filter-id': `url(#${filterId})`
  }
})

let resizeObserver = null
let intersectionObserver = null
let lastContentRect = null
let rafId = 0
let lastFrameTs = 0
let lastMapKey = ''
let currentBlobUrl = null
const isVisible = ref(true)

function scheduleMapUpdate (force = false) {
  if (props.lazy && !isVisible.value && !force) return
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame((ts) => {
    const minDelta = 1000 / Math.max(1, props.maxUpdatesPerSec)
    if (!force && ts - lastFrameTs < minDelta) return
    lastFrameTs = ts
    updateDisplacementMap()
  })
}

function generateSvg (actualWidth, actualHeight) {
  const edgeSize = Math.min(actualWidth, actualHeight) * (props.borderWidth * 0.5)
  return `
    <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#0000"/>
          <stop offset="100%" stop-color="red"/>
        </linearGradient>
        <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0000"/>
          <stop offset="100%" stop-color="blue"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"/>
      <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${props.borderRadius}" fill="url(#${redGradId})"/>
      <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${props.borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode:${props.mixBlendMode}"/>
      <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${props.borderRadius}" fill="hsl(0 0% ${props.brightness}% / ${props.opacity})" style="filter:blur(${props.blur}px)"/>
    </svg>
  `
}

function setFeImageFromSvg (svgString) {
  const blob = new Blob([svgString], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  if (feImageRef.value) feImageRef.value.setAttribute('href', url)
  if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl)
  currentBlobUrl = url
}

function updateDisplacementMap () {
  if (!feImageRef.value) return
  if (props.displacementSrc) {
    feImageRef.value.setAttribute('href', props.displacementSrc)
    return
  }
  const w = Math.max(1, Math.floor((lastContentRect?.width ?? containerRef.value?.clientWidth ?? 400)))
  const h = Math.max(1, Math.floor((lastContentRect?.height ?? containerRef.value?.clientHeight ?? 200)))
  const key = `${w}x${h}|${props.borderRadius}|${props.borderWidth}|${props.brightness}|${props.opacity}|${props.blur}|${props.mixBlendMode}`
  if (key === lastMapKey) return
  lastMapKey = key
  setFeImageFromSvg(generateSvg(w, h))
}

function applyChannelSettings () {
  const channels = [
    { el: redChannelRef.value, offset: props.redOffset },
    { el: greenChannelRef.value, offset: props.greenOffset },
    { el: blueChannelRef.value, offset: props.blueOffset }
  ]
  channels.forEach(({ el, offset }) => {
    if (!el) return
    el.setAttribute('scale', String(props.distortionScale + offset))
    el.setAttribute('xChannelSelector', props.xChannel)
    el.setAttribute('yChannelSelector', props.yChannel)
  })
  if (gaussianBlurRef.value) {
    gaussianBlurRef.value.setAttribute('stdDeviation', String(props.displace))
  }
}

onMounted(async () => {
  supportsSvgBackdrop.value = detectSupportOnce()
  await nextTick()
  applyChannelSettings()
  scheduleMapUpdate(true)

  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === containerRef.value) {
          lastContentRect = entry.contentRect
          scheduleMapUpdate()
        }
      }
    })
    if (containerRef.value) resizeObserver.observe(containerRef.value)
  }

  if (props.lazy && 'IntersectionObserver' in window && containerRef.value) {
    intersectionObserver = new IntersectionObserver((entries) => {
      const e = entries[0]
      isVisible.value = !!e?.isIntersecting
      if (isVisible.value) scheduleMapUpdate(true)
    }, { rootMargin: '200px' })
    intersectionObserver.observe(containerRef.value)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  if (resizeObserver) resizeObserver.disconnect()
  if (intersectionObserver) intersectionObserver.disconnect()
  if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl)
})

watch(
  () => [props.distortionScale, props.redOffset, props.greenOffset, props.blueOffset, props.xChannel, props.yChannel, props.displace],
  () => applyChannelSettings()
)

watch(
  () => [props.width, props.height, props.borderRadius, props.borderWidth, props.brightness, props.opacity, props.blur, props.mixBlendMode],
  () => scheduleMapUpdate()
)
</script>

<style>
.glass-surface {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.26s ease-out;
  contain: layout paint;
  content-visibility: auto;
}

.glass-surface__filter {
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: -1;
}

.glass-surface__content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: inherit;
  position: relative;
  z-index: 1;
}

.glass-surface--svg {
  background: light-dark(hsl(0 0% 100% / var(--glass-frost, 0)), hsl(0 0% 0% / var(--glass-frost, 0)));
  backdrop-filter: var(--filter-id, url(#glass-filter)) saturate(var(--glass-saturation, 1));
  box-shadow:
    0 0 2px 1px light-dark(color-mix(in oklch, black, transparent 85%), color-mix(in oklch, white, transparent 65%)) inset,
    0 0 10px 4px light-dark(color-mix(in oklch, black, transparent 90%), color-mix(in oklch, white, transparent 85%)) inset,
    0px 4px 16px rgba(17, 17, 26, 0.05),
    0px 8px 24px rgba(17, 17, 26, 0.05),
    0px 16px 56px rgba(17, 17, 26, 0.05),
    0px 4px 16px rgba(17, 17, 26, 0.05) inset,
    0px 8px 24px rgba(17, 17, 26, 0.05) inset,
    0px 16px 56px rgba(17, 17, 26, 0.05) inset;
}

.glass-surface--fallback {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
  -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.2),
    0 2px 16px 0 rgba(31, 38, 135, 0.1),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);
}

@media (prefers-color-scheme: dark) {
  .glass-surface--fallback {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
    -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .glass-surface--fallback {
    background: rgba(255, 255, 255, 0.4);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.3);
  }
  .glass-surface--fallback::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.15);
    border-radius: inherit;
    z-index: -1;
  }
}

@supports not (backdrop-filter: blur(10px)) {
  @media (prefers-color-scheme: dark) {
    .glass-surface--fallback {
      background: rgba(0, 0, 0, 0.4);
    }
    .glass-surface--fallback::before {
      background: rgba(255, 255, 255, 0.05);
    }
  }
}

.glass-surface:focus-visible {
  outline: 2px solid light-dark(#007aff, #0a84ff);
  outline-offset: 2px;
}
</style>
