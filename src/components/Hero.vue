<template lang="pug">
main
    p Hey! I’m Mateus Felipe, web developer and designer
    h1
        span Let’s build beautiful applications
        span {{" "}}together.
    .actions
        .button( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')" ) contact me
        .button( @click="redirect('#relevant-projects')" ).outline what I've been working on
    .socials
        a( @click="redirect('https://github.com/mateusfcolla', '_blank')" rel="noopener noreferrer")
            img( :src="github" alt="My Github")
        a( @click="redirect('https://codepen.io/coall_fcm', '_blank')" rel="noopener noreferrer")
            img( :src="codepen" alt="My Codepen")
        a( @click="redirect('https://dribbble.com/coall_fcm', '_blank')" rel="noopener noreferrer")
            img( :src="dribbble" alt="My Dribbble")
    LogoSlider.tech-slider

</template>

<script setup>

import github from '@/assets/icons/socials-github.svg'
import codepen from '@/assets/icons/socials-codepen.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'
import LogoSlider from './LogoSlider.vue'
import { redirect } from '@/utils.js'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {

    const scrollConfig = {
        trigger: 'main',
        start: '10% middle',
        scrub: .6,
    }

    gsap.to('main .tech-slider', {
        scrollTrigger: scrollConfig,
        opacity: 0,
    })

    gsap.to('main h1', {
        scrollTrigger: scrollConfig,
        x: -70,
    })

    gsap.to('main p', {
        scrollTrigger: scrollConfig,
        x: -70,
    })

    gsap.to('main .actions', {
        scrollTrigger: scrollConfig,
        x: -70,
    })

    gsap.to('main .socials', {
        scrollTrigger: scrollConfig,
        x: -70,
    })

})

</script>

<style lang="scss">

main {
    min-height: 80vh;
    padding: 2.31rem 7.38rem;
    position: relative;
    padding-top: 30vh;

    @media screen and (max-width: 1028px) {
        padding: 1rem 2.31rem;
        padding-top: 30vh;
    }

    p {
        color: #D3D2D8;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: .6rem;
    }

    .tech-slider {
        position: absolute;
        top: 0;
        right: 7.38rem;
        height: 100%;

        @media screen and (max-width: 1028px) {
            position: relative;
            padding-top: 5rem;
            padding-bottom: 8rem;
            top: unset;
            right: unset;
            top: 100%;
            left: 0;
        }
    }

    h1 {
        color: #ffffff;
        font-family: Lusitana;
        font-size: 2.69719rem;
        font-style: normal;
        font-weight: 700;

        span {
            display: block;
        }

        @media screen and (max-width: 1028px) {
            br {
                display: none;
            }
        }
    }

    .actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;

        @media screen and (max-width: 1028px) {
            flex-direction: column;
        }
    }

    .socials {
        position: absolute;
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
}

</style>