<template lang="pug">
main(ref="heroSection")
    .glow
    h2 Hey! I’m Mateus Felipe
    h1
        span.word Web Developer
        span.word UI/UX Designer
    .socials
        a( @click="redirect('https://github.com/mateusfcolla', '_blank')" rel="noopener noreferrer")
            img( :src="github" alt="My Github")
        a( @click="redirect('https://dribbble.com/coall_fcm', '_blank')" rel="noopener noreferrer")
            img( :src="dribbble" alt="My Dribbble")
    .contact
        a( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')" ) felipe.colla.m@gmail.com
    canvas#space-background

</template>

<script setup>
import { onMounted, ref } from 'vue'
import github from '@/assets/icons/socials-github.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'
import { redirect } from '@/utils.js'
import * as THREE from 'three'

let starRotationSpeed = 0.0003

onMounted(() => {
    const canvas = document.getElementById('space-background')
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    // Star geometry
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 2000
    const starVertices = []

    function createCircleTexture() {
        const size = 64
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size

        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
        gradient.addColorStop(0, '#f5f5f5')
        gradient.addColorStop(1, '#adadad')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 4)
        ctx.fill()

        const texture = new THREE.CanvasTexture(canvas)
        return texture
    }

    for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 100
        const y = (Math.random() - 0.5) * 100
        const z = (Math.random() - 0.5) * 100
        starVertices.push(x, y, z)
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

    const colors = []

    for (let i = 0; i < starCount; i++) {
        const isRed = Math.random() < 0.1 // 10% chance
        if (isRed) {
            colors.push(.76, 0.15, 0.15) // reddish color
        } else {
            colors.push(1, 1, 1) // white
        }
    }

    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const starMaterial = new THREE.PointsMaterial({
        size: Math.random() * 0.05 + 0.06,
        map: createCircleTexture(),
        transparent: true,
        alphaTest: 0.01,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexColors: true, // enable color per point
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.0005
        mouseY = (event.clientY - window.innerHeight / 2) * 0.0005
    })

    // Scroll interaction
    let scrollY = 0
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY * 0.0007
    })

    // Animate
    const animate = () => {
        requestAnimationFrame(animate)

        // Default subtle rotation
        stars.rotation.y += starRotationSpeed
        stars.rotation.x += starRotationSpeed * 0.25

        // Mouse and scroll interaction
        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (-mouseY - camera.position.y) * 0.05
        camera.position.z = 5 + scrollY

        renderer.render(scene, camera)
    }

    animate()

    // Existing text animation (keep yours unchanged)
    const words = document.getElementsByClassName("word");
    const wordArray = [];
    let currentWord = 0;

    words[currentWord].style.opacity = 1;

    for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        const cw = wordArray[currentWord];
        const nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];

        for (let i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (let i = 0; i < nw.length; i++) {
            nw[i].className = "letter behind";
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function () {
            cw[i].className = "letter out";
        }, i * 45);
    }

    function animateLetterIn(nw, i) {
        setTimeout(() => {
            nw[i].className = "letter in";
        }, 340 + i * 45);
    }

    function splitLetters(word) {
        const content = word.innerHTML;
        word.innerHTML = "";
        const letters = [];

        for (let i = 0; i < content.length; i++) {
            const letter = document.createElement("span");
            letter.className = "letter";
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 3500);

})

</script>

<style lang="scss">

@import "@/assets/hero/background.scss";

main {
    min-height: 93vh;
    padding: 2.31rem 7.38rem;
    position: relative;
    padding-top: 30vh;
    overflow: hidden;

    @media screen and (max-width: 1028px) {
        padding: 1rem 2.31rem;
        padding-top: 30vh;
    }

    h2 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 1.2rem;
        margin-top: 3.2rem;
        text-align: center;
        user-select: none;

        @media screen and (max-width: 1028px) {
            font-size: 1rem;
        }
    }

    h1 {
        color: #ffffff;
        font-family: "Readex Pro", sans-serif;
        font-size: 5rem;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;
        position: relative;
        user-select: none;

        @media screen and (max-width: 1028px) {
            font-size: 2.4rem;
        }

        .word {
            text-rendering: optimizeLegibility!important;
            white-space: pre;
            left: 50%;
            transform: translate(-50%, -10%);
            opacity: 0;
            display: block;
            top: 0;
            position: absolute;

            .letter {
                background: linear-gradient(0deg, #525252e5, #ffffffe5);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
        }

        @media screen and (max-width: 1028px) {
            br {
                display: none;
            }
        }
    }

    .contact {
        position: absolute;
        bottom: 50%;
        right: -1.4rem;
        transform: translateY(-50%) rotate(90deg);
        font-size: 1rem;
        color: #CFCFCF;
        font-weight: 400;
        cursor: pointer;
        user-select: none;
        transition: .2s;

        &:hover {
            color: #ffffff;
        }

        @media screen and (max-width: 1028px) {
            display: none;
        }
    }

    .socials {
        position: absolute;
        display: flex;
        gap: .6rem;
        left: 50%;
        bottom: 1.4rem;
        transform: translateX(-50%);

        a {
            cursor: pointer;

            &:hover {
                transform: scale(1.08);
            }
        }
    }
}

.letter {
  text-rendering: optimizeLegibility !important;
  display: inline-block;
  position: relative;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.20s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.24s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#space-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    display: block;
}


</style>