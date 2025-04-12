<template lang="pug">

.logo-slider
    .logos-slide
        a.logo-slide( v-for="logo, index in orderedLogos[0]" :href="logo.link" target="_blank" :key="logo.name+index" )
            img( :src="logo.img" :alt="logo.name" )
    .logos-slide.reverse
        a.logo-slide( v-for="logo, index in orderedLogos[1]" :href="logo.link" target="_blank" :key="logo.name+index" )
            img( :src="logo.img" :alt="logo.name" )

</template>

<script setup>

import { technologieSliderLogos } from '@/utils.js'
import { onMounted, ref } from 'vue'

const logos = technologieSliderLogos();

const orderedLogos = ref(new Array())

const getOrderedLogos = () => {
    const sorted = logos.sort((a, b) => 0.8 - Math.random());
    const arrays = [ sorted.slice(0, sorted.length / 2), sorted.slice(sorted.length / 2, sorted.length) ];
    return arrays;
}

onMounted(() => {
    orderedLogos.value = getOrderedLogos()
})



</script>

<style lang="scss" >

.logo-slider {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    gap: 1.8rem;
    display: flex;
    padding: 0 .2rem;
    height: 100%;

    @media screen and (max-width: 1028px) {
        flex-direction: column;
    }

    &:hover .logos-slide {
        animation-play-state: paused;
    }

    .logos-slide {
        display: flex;
        height: fit-content;
        flex-direction: column;
        animation: slideY 13s infinite linear alternate;

        &.reverse {
            animation-direction: alternate-reverse;
        }

        @media screen and (max-width: 1028px) {
            flex-direction: row;
            animation: slideX 6s infinite linear;
        }

        .logo-slide {
            margin-bottom: 1.8rem;

            @media screen and (max-width: 1028px) {
                margin-right: 1.6rem;
                margin-bottom: 0;
            }

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

@keyframes slideY {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-43%);
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