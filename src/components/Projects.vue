<template lang="pug">

section#relevant-projects
    h2 Recent relevant projects
    Technologie( name="Express JS" :icon="Express" backgroundColor="#0f0f0f" )
    Technologie( name="React" :icon="React" backgroundColor="#00d8ff" )

</template>

<script setup>

import Technologie from './Technologie.vue'
import Express from '@/assets/technologies/express.svg?component'
import React from '@/assets/technologies/react.svg?component'

</script>

<style lang="scss">

#relevant-projects {
    color: #0F0F0F;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3.3125rem 15.8125rem 7.125rem 15.8125rem;

    h2 {
        color: #0F0F0F;
        font-family: 'Lusitana';
        font-size: 2.39719rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}

</style>