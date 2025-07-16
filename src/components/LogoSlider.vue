<template lang="pug">

.logo-slider
    .logos-slide
        a.logo-slide(
            v-for="(logo, index) in [...orderedLogos[0], ...orderedLogos[0]]"
            :href="logo.link"
            target="_blank"
            :key="logo.name + index"
        )
            img(:src="logo.img" :alt="logo.name")
    .logos-slide.reverse
        a.logo-slide(
            v-for="(logo, index) in [...orderedLogos[1], ...orderedLogos[1]]"
            :href="logo.link"
            target="_blank"
            :key="logo.name + index"
        )
            img(:src="logo.img" :alt="logo.name")

</template>

<script setup>

import { getLogoSliderLogos } from '@/utils.js'
import { onMounted, ref } from 'vue'

const logos = getLogoSliderLogos();

const orderedLogos = ref([[], []])

const getOrderedLogos = () => {
    const shuffled = logos.slice().sort(() => 0.5 - Math.random());
    const half = Math.ceil(shuffled.length / 2);
    return [shuffled.slice(0, half), shuffled.slice(half)];
}

onMounted(() => {
    orderedLogos.value = getOrderedLogos()
})



</script>

<style lang="scss" >

.logo-slider {
    padding: 2.31rem 0!important;
    white-space: nowrap;
    position: relative;
    gap: 1.8rem;
    display: flex;
    flex-direction: column;
    padding: 0 .2rem;
    height: 100%;

    @media screen and (max-width: 1028px) {
        flex-direction: column;
    }

    // &:hover .logos-slide {
    //     animation-play-state: paused;
    // }

    .logos-slide {
        display: flex;
        height: fit-content;
        animation: slideX 13s infinite linear alternate;

        @media screen and (max-width: 1028px) {
            animation: slideX 6s infinite linear alternate;
        }

        &.reverse {
            animation-direction: alternate-reverse;
        }

        .logo-slide {
            margin-right: 1.6rem;

            &:hover {
                transform: scale(1.08);
            }

            img {
                width: 6.94556rem;
                height: 6.94556rem;
            }
        }
    }
}

@keyframes slideX {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-43%);
    }
}

</style>