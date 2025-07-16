<template lang="pug">

.logo-displayer
    h2 Technologies
    .logo-row
        a.logo-display.empty( v-for="index in 20" :key="'empty-' + index" )
            .empty-logo
    .logo-row(
        v-for="(row, rowIndex) in logoRows"
        :key="'row-' + rowIndex"
    )
        a.logo-display.empty( v-for="index in 10" :key="'empty-' + index" )
            .empty-logo
        a.logo-display(
            v-for="(logo, index) in row"
            :href="logo?.link"
            target="_blank"
            :key="logo?.name + index + rowIndex"
            :style="{ boxShadow: hoveredIndex === logo?.name + index + rowIndex ? `0px 0px 30px -10px ${logo?.color}` : '', borderColor: hoveredIndex === logo?.name + index + rowIndex ? logo?.color : '' }"
            @mouseenter="hoveredIndex = logo?.name + index + rowIndex"
            @mouseleave="hoveredIndex = null"
        )
            img( v-if="logo?.img" :src="logo?.img" :alt="logo?.name")
        a.logo-display.empty( v-for="index in 10" :key="'empty-' + index" )
            .empty-logo
    .logo-row
        a.logo-display.empty( v-for="index in 20" :key="'empty-' + index" )
            .empty-logo

</template>

<script setup>

import { getLogoSliderLogos } from '@/utils.js'
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'

const logos = getLogoSliderLogos();

const orderedLogos = ref([]);
const hoveredIndex = ref(null);
const logoRows = ref([]);

const logoSize = 104;
const logoMargin = 16;

const groupLogosIntoRows = () => {
    nextTick(() => {
        const container = document.querySelector('.logo-displayer');if (!container) return;
        const containerWidth = container.clientWidth-(25.6*2);
        const logoTotalWidth = logoSize + logoMargin*2;
        const logosPerRow = Math.max(1, Math.floor(containerWidth / logoTotalWidth));
        const rows = [];

        for (let i = 0; i < orderedLogos.value.length; i += logosPerRow) {
            rows.push(orderedLogos.value.slice(i, i + logosPerRow));
        }

        logoRows.value = rows;
    })
}

const getOrderedLogos = () => {
    return logos.sort(() => 0.5 - Math.random());
}

onMounted(() => {
    orderedLogos.value = getOrderedLogos()
    groupLogosIntoRows()
    window.addEventListener('resize', groupLogosIntoRows)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', groupLogos)
})

</script>

<style lang="scss" >

.logo-displayer {
    padding: 4rem 0;
    white-space: nowrap;
    position: relative;
    gap: 1.8rem;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    margin: 3rem 0;

    h2 {
        color: #FFF;
        text-align: center;
        font-family: "Readex Pro", sans-serif;
        font-weight: 700;
        font-size: 2.6875rem;
        position: absolute;
        top: -.8rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 6;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #0e100f 0%, #0e100f00 38%), linear-gradient(0deg, #0e100f 0%, #0e100f00 38%);
        pointer-events: none;

        @media screen and (max-width: 1028px) {
            background: linear-gradient(180deg, #0e100f 0%, #0e100f00 10%), linear-gradient(0deg, #0e100f 0%, #0e100f00 10%);
        }
    }

    .logo-row {
        display: flex;
        width: 100%;
        gap: 1.6rem;
        padding: 0 1.6rem;
        justify-content: center;

        &:nth-child(even) {
            transform: translateX(-1.6rem);
        }
    }

    .logo-display {
        border: 1px solid #252525;
        padding: .8rem;
        background: #141414;
        border-radius: .8rem;
        transition: .2s;

        &.empty {
            content: "";

            .empty-logo {
                width: 4.8rem;
                height: 4.8rem;
            }

            &:hover {
                box-shadow: none;
                transform: scale(.95);
            }
        }

        &:hover {
            box-shadow: 0px 0px 30.5px 0px;
        }

        img {
            width: 4.8rem;
            height: 4.8rem;
        }
    }
}

</style>