<!-- Plasma.vue -->
<template>
  <div ref="containerRef" class="plasma-container" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Renderer, Program, Mesh, Triangle } from 'ogl'

/* ---------- Helpers ---------- */
const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!m) return [1, 0.5, 0.2]
  return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
}

/* ---------- Props ---------- */
const props = defineProps({
  color: { type: String, default: '#ffffff' },
  speed: { type: Number, default: 1 },
  direction: { type: String, default: 'forward' }, // 'forward' | 'reverse' | 'pingpong'
  scale: { type: Number, default: 1 },
  opacity: { type: Number, default: 1 },
  mouseInteractive: { type: Boolean, default: true }
})

/* ---------- Shaders ---------- */
const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}
`

/* ---------- Refs / GL state ---------- */
const containerRef = ref(null)
let renderer, gl, program, mesh, ro, raf = null
let directionMultiplier = 1.0

/* ---------- Mouse handling ---------- */
const mouse = { x: 0, y: 0 }
function handleMouseMove (e) {
  if (!props.mouseInteractive || !containerRef.value || !program) return
  const rect = containerRef.value.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
  const m = program.uniforms.uMouse.value
  m[0] = mouse.x
  m[1] = mouse.y
}

/* ---------- Init / teardown ---------- */
function setSize () {
  if (!containerRef.value || !renderer || !program) return
  const rect = containerRef.value.getBoundingClientRect()
  const w = Math.max(1, Math.floor(rect.width))
  const h = Math.max(1, Math.floor(rect.height))
  renderer.setSize(w, h)
  const res = program.uniforms.iResolution.value
  res[0] = gl.drawingBufferWidth
  res[1] = gl.drawingBufferHeight
}

onMounted(() => {
  directionMultiplier = props.direction === 'reverse' ? -1.0 : 1.0

  renderer = new Renderer({
    webgl: 2,
    alpha: true,
    antialias: false,
    dpr: Math.min(window.devicePixelRatio || 1, 2)
  })
  gl = renderer.gl
  const canvas = gl.canvas
  canvas.style.display = 'block'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  containerRef.value.appendChild(canvas)

  const geometry = new Triangle(gl)
  program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new Float32Array([1, 1]) },
      uCustomColor: { value: new Float32Array(hexToRgb(props.color)) },
      uUseCustomColor: { value: props.color ? 1.0 : 0.0 },
      uSpeed: { value: props.speed * 0.4 },
      uDirection: { value: directionMultiplier },
      uScale: { value: props.scale },
      uOpacity: { value: props.opacity },
      uMouse: { value: new Float32Array([0, 0]) },
      uMouseInteractive: { value: props.mouseInteractive ? 1.0 : 0.0 }
    }
  })
  mesh = new Mesh(gl, { geometry, program })

  ro = new ResizeObserver(setSize)
  ro.observe(containerRef.value)
  setSize()

  if (props.mouseInteractive) {
    containerRef.value.addEventListener('mousemove', handleMouseMove)
  }

  const t0 = performance.now()
  const loop = (t) => {
    const timeVal = (t - t0) * 0.001
    if (props.direction === 'pingpong') {
      program.uniforms.uDirection.value = Math.sin(timeVal * 0.5) * directionMultiplier
    }
    program.uniforms.iTime.value = timeVal
    renderer.render({ scene: mesh })
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
  if (ro) ro.disconnect()
  if (containerRef.value) {
    containerRef.value.removeEventListener('mousemove', handleMouseMove)
    try { containerRef.value.removeChild(gl?.canvas) } catch {}
  }
  try { gl?.getExtension('WEBGL_lose_context')?.loseContext() } catch {}
  renderer = gl = program = mesh = ro = null
})

/* ---------- Reactivity -> uniforms ---------- */
watch(() => props.color, (c) => {
  if (!program) return
  const rgb = hexToRgb(c)
  program.uniforms.uCustomColor.value.set(rgb)
  program.uniforms.uUseCustomColor.value = c ? 1.0 : 0.0
})

watch(() => props.speed, (s) => {
  if (!program) return
  program.uniforms.uSpeed.value = s * 0.4
})

watch(() => props.direction, (d) => {
  if (!program) return
  directionMultiplier = d === 'reverse' ? -1.0 : 1.0
  if (d !== 'pingpong') {
    program.uniforms.uDirection.value = directionMultiplier
  }
})

watch(() => props.scale, (v) => {
  if (!program) return
  program.uniforms.uScale.value = v
})

watch(() => props.opacity, (v) => {
  if (!program) return
  program.uniforms.uOpacity.value = v
})

watch(() => props.mouseInteractive, (v) => {
  if (!containerRef.value || !program) return
  program.uniforms.uMouseInteractive.value = v ? 1.0 : 0.0
  containerRef.value.removeEventListener('mousemove', handleMouseMove)
  if (v) containerRef.value.addEventListener('mousemove', handleMouseMove)
})
</script>

<style>

.plasma-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}


</style>