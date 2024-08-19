<template lang="pug">

.technology_wrapper
    .technology( @mouseover="isHovered = true" @mouseleave="isHovered = false" :style="{ boxShadow: getBoxShadow, transition: getTransition}" )
        .technology__background( :style="{ background: props.backgroundColor || '#000000' }" )
        component( :is="props.icon")
    .technology__name( :style="{ background: props.backgroundColor || '#000000' }" ) {{ props.name }}

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

<style lang="scss" scoped>

.technology_wrapper {
    position: relative;
    width: fit-content;
    height: fit-content;

    &:hover .technology__name{
        bottom: calc( 100% + .3rem );
        opacity: 1;
    }
}

.technology__name {
    position: absolute;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    padding: .2rem .4rem;
    border-radius: .2rem;
    color: #030303;
    bottom: 80%;
    opacity: 0;
    transition: .6s;
    z-index: 3;
}

.technology {
    background: #fff;
    border-radius: .38rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    transition: .5s;

    .technology__background {
        width: 100%;
        height: 100%;
        content: "";
        top: 100%;
        left: 0;
        position: absolute;
        transition: .3s ease-in-out;
        z-index: 2;

        @media screen and (max-width: 1028px) {
            top: 0;
        }
    }

    svg {
        z-index: 3;
    }

    svg path {
        fill: red;
    }

    path {
        fill: blue;
    }

    &:hover {

        .technology__background {
            top: 0;
        }

        path {
            fill: #ffffff !important;
        }
    }
}

</style>