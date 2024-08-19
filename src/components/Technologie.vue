<template lang="pug">

.technologie_wrapper
    .technologie( @mouseover="isHovered = true" @mouseleave="isHovered = false" :style="{ boxShadow: getBoxShadow, transition: getTransition}" )
        .technologie__background( :style="{ background: props.backgroundColor || '#000000' }" )
        component( :is="props.icon")
    .technologie__name( :style="{ background: props.backgroundColor || '#000000' }" ) {{ props.name }}

</template>

<script setup>

import { computed, ref } from 'vue'

const props = defineProps(['icon', 'backgroundColor', 'name'])
const isHovered = ref(false)

const getBoxShadow = computed(() => {
    if(isHovered.value) {
        return `0px 0px 6px ${props.backgroundColor}`;
    }
    return `none`;
})

const getTransition = computed(() => {
    if(isHovered.value) {
        return `.3s`;
    }
    return `0s`;
})

</script>

<style lang="scss">

.technologie_wrapper {
    position: relative;
    width: fit-content;
    height: fit-content;

    &:hover .technologie__name{
        bottom: calc( 100% + .3rem );
        opacity: 1;
    }
}

.technologie__name {
    position: absolute;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    padding: .2rem .4rem;
    border-radius: .2rem;
    color: white;
    bottom: 80%;
    opacity: 0;
    transition: .4s;
    z-index: 3;
}

.technologie {
    background: #fff;
    border-radius: .38rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: .3s;

    .technologie__background {
        width: 100%;
        height: 100%;
        content: "";
        top: 100%;
        left: 0;
        position: absolute;
        transition: .3s ease-in-out;
        z-index: 2;
    }

    svg {
        z-index: 3;
    }

    &:hover {

        .technologie__background {
            top: 0;
        }

        path {
            fill: white;
        }
    }
}

</style>