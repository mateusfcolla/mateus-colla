
<template>
  <div
    class="curved-loop-jacket"
    :style="{ visibility: ready ? 'visible' : 'hidden', cursor: cursorStyle }"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="endDrag"
    @pointerleave="endDrag"
  >
    <svg class="curved-loop-svg" viewBox="0 0 1440 120">
      <text
        ref="measureRef"
        xml:space="preserve"
        :style="{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }"
      >
        {{ text }}
      </text>

      <defs>
        <path
          :id="pathId"
          :d="pathD"
          fill="none"
          stroke="transparent"
        />
      </defs>

      <text v-if="ready" font-weight="bold" xml:space="preserve" :class="className">
        <textPath
          ref="textPathRef"
          :href="'#' + pathId"
          :startOffset="offset + 'px'"
          xml:space="preserve"
        >
          {{ totalText }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

/* Props */
const props = defineProps({
  marqueeText: { type: String, default: '' },
  speed: { type: Number, default: 2 },
  className: { type: String, default: '' },
  curveAmount: { type: Number, default: 400 },
  direction: { type: String, default: 'left' }, // 'left' | 'right'
  interactive: { type: Boolean, default: true }
})

/* IDs & refs */
const uid = Math.random().toString(36).slice(2)
const pathId = `curve-${uid}`

const measureRef = ref(null)
const textPathRef = ref(null)


const spacing = ref(0)
const offset = ref(0)
const dragRef = ref(false)
const lastXRef = ref(0)
const velRef = ref(0)
const dirRef = ref(props.direction)

/* Derived */
const text = computed(() => {
  const hasTrailing = /[\s\u00A0]$/.test(props.marqueeText)
  const base = hasTrailing ? props.marqueeText.replace(/\s+$/, '') : props.marqueeText
  return base + '\u00A0'
})

const pathD = computed(() => `M-100,40 Q500,${40 + props.curveAmount} 1540,40`)

const ready = computed(() => spacing.value > 0)

const totalText = computed(() => {
  const len = spacing.value
  if (!len) return text.value
  const repeats = Math.ceil(1800 / len) + 2
  return Array(repeats).fill(text.value).join('')
})

const cursorStyle = computed(() =>
  props.interactive ? (dragRef.value ? 'grabbing' : 'grab') : 'auto'
)

/* Measure text length when content or styling context changes */
async function measureSpacing () {
  await nextTick()
  if (measureRef.value && typeof measureRef.value.getComputedTextLength === 'function') {
    spacing.value = measureRef.value.getComputedTextLength()
  }
}

watch([text, () => props.className], measureSpacing, { immediate: true })

/* Initialize offset when spacing is known */
watch(spacing, (s) => {
  if (s > 0) {
    offset.value = -s
  }
})

/* RAF loop for continuous scroll (pauses while dragging) */
let frameId = 0
function step () {
  const s = spacing.value
  if (s && !dragRef.value) {
    const delta = dirRef.value === 'right' ? props.speed : -props.speed
    let next = offset.value + delta
    // wrap
    if (next <= -s) next += s
    if (next > 0) next -= s
    offset.value = next
  }
  frameId = requestAnimationFrame(step)
}

onMounted(() => {
  frameId = requestAnimationFrame(step)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
})

/* Pointer interactions */
function onPointerDown (e) {
  if (!props.interactive) return
  dragRef.value = true
  lastXRef.value = e.clientX
  velRef.value = 0
  if (e.target?.setPointerCapture) {
    try { e.target.setPointerCapture(e.pointerId) } catch {
        // ignore
    }
  }
}

function onPointerMove (e) {
  if (!props.interactive || !dragRef.value) return
  const dx = e.clientX - lastXRef.value
  lastXRef.value = e.clientX
  velRef.value = dx

  const s = spacing.value || 1
  let next = offset.value + dx
  if (next <= -s) next += s
  if (next > 0) next -= s
  offset.value = next
}

function endDrag () {
  if (!props.interactive) return
  dragRef.value = false
  dirRef.value = velRef.value > 0 ? 'right' : 'left'
}


watch(() => props.direction, (d) => { dirRef.value = d })
</script>

<style lang="scss" scoped>

.curved-loop-jacket {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.curved-loop-svg {
  user-select: none;
  width: 100%;
  aspect-ratio: 100 / 12;
  overflow: visible;
  display: block;
  font-size: 6rem;
  fill: #ffffff;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
}

</style>