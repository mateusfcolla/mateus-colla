<template lang="pug">

.logo-displayer
    a.logo-display(
        v-for="(logo, index) in orderedLogos"
        :href="logo.link"
        target="_blank"
        :key="logo.name + index"
        :style="{ boxShadow: hoveredIndex === index ? `0px 0px 20px -6px ${logo.color}` : '' }"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
    )
        img(:src="logo.img" :alt="logo.name")

</template>

<script setup>

import { getLogoSliderLogos } from '@/utils.js'
import { onMounted, ref } from 'vue'

const logos = getLogoSliderLogos();

const orderedLogos = ref([])

const hoveredIndex = ref(null)

const getOrderedLogos = () => {
    return logos.sort(() => 0.5 - Math.random());
}

onMounted(() => {
    orderedLogos.value = getOrderedLogos()
})



</script>

<style lang="scss" >

.logo-displayer {
    padding: 2.31rem 0!important;
    white-space: nowrap;
    position: relative;
    gap: 1.8rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0 .2rem;
    height: 100%;

    .logo-display {
        border: 1px solid #252525;
        background: #141414;
        border-radius: .8rem;
        margin-right: 1.6rem;
        transition: .3s;

        &:hover {
            box-shadow: 0px 0px 30.5px 0px;
        }

        img {
            width: 6rem;
            height: 6rem;
        }
    }
}

</style>