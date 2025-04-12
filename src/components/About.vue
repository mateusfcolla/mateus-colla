<template lang="pug">

section#about
    .left
        h2 A little about myself...
        p
            | I specialize in
            span(  ) {{" "}} Web Development and UI/UX design {{" "}}
            | since 2018. I’m passionate about making things better, being prettier or faster, as well as music and creating beautiful interfaces.
        p
            | I’m a self-taught developer, but also hold a technical degree in System Analysis and Development and I’m always looking for new challenges and opportunities to grow.
        .socials
            a( @click="redirect('https://github.com/mateusfcolla', '_blank')" rel="noopener noreferrer")
                img( :src="github" alt="My Github")
            a( @click="redirect('https://dribbble.com/coall_fcm', '_blank')" rel="noopener noreferrer")
                img( :src="dribbble" alt="My Dribbble")
    .right
        a.logo-slide( v-for="logo, index in orderedLogos" :href="logo.link" target="_blank" :key="logo.name+index" )
            img( :src="logo.img" :alt="logo.name" )

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { redirect, getLogoSliderLogos } from '@/utils.js'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

import github from '@/assets/icons/socials-github.svg'
import codepen from '@/assets/icons/socials-codepen.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'

const logos = getLogoSliderLogos()

const orderedLogos = ref(new Array())

const getOrderedLogos = () => {
    const sorted = logos.sort((a, b) => 0.8 - Math.random());
    return sorted;
}

onMounted(() => {
    orderedLogos.value = getOrderedLogos()

    const scrollConfig = {
        trigger: '#about',
        start: '-130%',
        end: '-80%',
        scrub: .6,
    }

    gsap.from('.left', {
        scrollTrigger: scrollConfig,
        opacity: 0,
        y: 200,
        x: -200,
    })

    gsap.from('.right', {
        scrollTrigger: scrollConfig,
        opacity: 0,
        x: 400,
        scale: 2,
    })
})

</script>

<style lang="scss">

#about {
    display: flex;
    gap: 5.5rem;
    margin-top: 6rem;
    margin-bottom: 6rem;
    justify-content: space-between;

    @media screen and (max-width: 1028px) {
        flex-direction: column;
        margin-bottom: 3rem;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 2.56rem;
        max-width: 39.3125rem;

        b, span {
            color: #ffffff;
            font-weight: 600;
        }
    }

    .right {
        display: flex;
        max-width: 40.4375rem;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 1.625rem 2.3125rem;
        flex-wrap: wrap;

        .logo-slide img{
            width: 5.875rem;
            height: 5.875rem;
            filter: grayscale(00%);

            @media screen and (max-width: 1028px) {
                display: none;
            }

            &:hover {
                transform: scale(1.1);
                filter: grayscale(0%);
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
}

</style>