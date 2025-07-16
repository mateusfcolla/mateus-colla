<template lang="pug">

section#about
    .left
        h2 A little about myself...
        p
            | I work and specialize in  since 2018.
            span(  ) {{" "}} web development and design {{" "}}
            | I’m passionate about creating inspiring interfaces and improving applications.
        .button( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')") contact me

    .right
        h2 Languages
        ul
            li Fluent English
            li Native Brazillian Portuguese
            li Basic German
        #threejs-container
LogoDisplayer

</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { redirect, getLogoSliderLogos } from '@/utils.js'
import LogoDisplayer from '@/components/LogoDisplayer.vue'
import * as THREE from 'three';

let renderer, scene, camera, sphere, wireframe, animationId;

function resizeRenderer(container) {
    if (!renderer || !camera || !container) return;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

let isDragging = false;
let previousMouseX = 0;
let autoRotate = true;
let autoRotateSpeed = 0.003; // default speed
const defaultAutoRotateSpeed = autoRotateSpeed; // store default speed for easing
let lastDragSpeed = 0;
let easing = false;

function onPointerDown(event) {
    isDragging = true;
    autoRotate = false;
    previousMouseX = event.clientX;
    lastDragSpeed = 0;
    easing = false;
}

function onPointerMove(event) {
    if (!isDragging) return;
    const deltaX = event.clientX - previousMouseX;
    previousMouseX = event.clientX;
    const rotationSpeed = 0.01;
    const rotationDelta = deltaX * rotationSpeed;
    sphere.rotation.y += rotationDelta;
    wireframe.rotation.y += rotationDelta;
    // Save the last drag speed (direction included)
    lastDragSpeed = rotationDelta;
}

function onPointerUp() {
    isDragging = false;
    // Set auto-rotation speed to last drag speed, then ease back to default
    autoRotateSpeed = lastDragSpeed;
    autoRotate = true;
    easing = true;
}

function easeAutoRotateSpeed() {
    if (!easing) return;
    // Smoothly interpolate autoRotateSpeed back to defaultAutoRotateSpeed
    autoRotateSpeed += (defaultAutoRotateSpeed - autoRotateSpeed) * 0.05;
    // If close enough, snap to default and stop easing
    if (Math.abs(autoRotateSpeed - defaultAutoRotateSpeed) < 0.0001) {
        autoRotateSpeed = defaultAutoRotateSpeed;
        easing = false;
    }
}

onMounted(() => {
    const container = document.getElementById('threejs-container');
    if (!container) return;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 2.5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    container.appendChild(renderer.domElement);

    // Transparent Sphere (fully transparent, smooth/round)
    const geometry = new THREE.SphereGeometry(1.2, 16, 16); // more segments for smoothness
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.0, // fully transparent
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Wireframe (latitude/longitude lines, smooth)
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    wireframe = new THREE.LineSegments(
        wireframeGeometry,
        new THREE.LineBasicMaterial({ color: 0x423b3b, linewidth: 2 })
    );
    scene.add(wireframe);

    // Lighting (not strictly needed for wireframe, but harmless)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Animation loop (horizontal rotation only, slower)
    function animate() {
        animationId = requestAnimationFrame(animate);
        if (autoRotate) {
            sphere.rotation.y += autoRotateSpeed;
            wireframe.rotation.y += autoRotateSpeed;
            easeAutoRotateSpeed();
        }
        renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    const handleResize = () => resizeRenderer(container);
    window.addEventListener('resize', handleResize);

    const canvas = renderer.domElement;
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Initial resize
    resizeRenderer(container);

    // Cleanup
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
        if (animationId) cancelAnimationFrame(animationId);
        if (renderer) {
            renderer.dispose();
            renderer.forceContextLoss();
            renderer.domElement = null;
            renderer = null;
        }
        scene = null;
        camera = null;
        sphere = null;
        wireframe = null;
        canvas.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
    });
})

</script>

<style lang="scss">

#about {
    display: flex;
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #2b2b2b;
    position: relative;
    overflow: hidden;

    & > div {
        padding: 3.125rem;
        align-items: flex-start;
        gap: 5.5rem;

        @media screen and (max-width: 1028px) {
            width: 100%!important;
            border-right: none!important;
            border-left: none!important;
        }
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 2.56rem;
        width: 50%;
        border-left: 1px solid #2b2b2b;

        b, span {
            color: #ffffff;
            font-weight: 600;
        }
    }

    .right {
        display: flex;
        width: 50%;
        flex-direction: column;
        gap: 2.56rem;
        flex-wrap: wrap;
        border-left: 1px solid #2b2b2b;
        border-right: 1px solid #2b2b2b;
        min-height: 32.25rem;
        position: relative;
        overflow: hidden;
        background: #181818;
        box-shadow: 0px 0px 30.5px 0px #7070701e;

        &::after {
            content: '';
            position: absolute;
            pointer-events: none;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: .6;
            background: radial-gradient(ellipse at 85% 100%, #00000080 0%, #18181800 40%);
            z-index: 1;
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: .56rem;

            li {
                font-size: 1.25rem;
                color: #CECECE;
                line-height: 175%;
            }
        }

        #threejs-container {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 30%;
            top: 50%;

            @media screen and (max-width: 1028px) {
                left: 0;
                top: 60%;
                pointer-events: none;
            }
            canvas {
                width: 100%!important;
                height: 100%!important;
                display: block;
            }
        }
    }

    .socials {
        display: flex;
        gap: .6rem;
        bottom: 2.31rem;

        a {
            cursor: pointer;

            &:hover {
                transform: scale(1.08);
            }
        }
    }

    @media screen and (max-width: 1028px) {
        flex-direction: column;
    }

}

#tech-slider {
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #2b2b2b;
    margin-top: -1px;
}

</style>