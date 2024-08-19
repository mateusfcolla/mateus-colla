<template lang="pug">

section#relevant-projects
    h2 Recent relevant projects
    Project( v-for="project in projects" :title="project.title" :subtitle="project.subtitle" :description="project.description" :background="project.background" :url="project.url")
        Technology( v-for="tech in project.technologies" :icon="tech.icon" :name="tech.name" :backgroundColor="tech.backgroundColor" )

</template>

<script setup>

import Project from './Project.vue';
import Technology from './Technology.vue';

import Wordpress from '@/assets/technologies/wordpress.svg?component'
import Sass from '@/assets/technologies/sass.svg?component'
import Tailwind from '@/assets/technologies/tailwind.svg?component'
import Go from '@/assets/technologies/go.svg?component'
import React from '@/assets/technologies/react.svg?component'
import Mongo from '@/assets/technologies/mongo.svg?component'

import Engeled from '@/assets/imgs/Engeled.png'
import Superpet from '@/assets/imgs/Superpet.png'

const projects = [
    {
        title: 'Engeled',
        subtitle: 'Website creation',
        description: 'Creation of the full website plus custom features for better user website customization',
        background: Engeled,
        url: 'https://engeled.com.br/',
        technologies: [
            { icon: Wordpress, name: 'Wordpress', backgroundColor: '#33a1d3' },
            { icon: Sass, name: 'Sass', backgroundColor: '#cd6799' },
            { icon: Tailwind, name: 'Tailwind', backgroundColor: '#38bdf8' },
        ]
    },
    {
        title: 'Superpet',
        subtitle: 'Website creation',
        description: 'Creation of the full website plus custom features for better user website customization',
        url: 'https://superpetdelivery.com.br/',
        background: Superpet,
        technologies: [
            { icon: React, name: 'React', backgroundColor: '#00d8ff' },
            { icon: Sass, name: 'Sass', backgroundColor: '#cd6799' },
            { icon: Tailwind, name: 'Tailwind', backgroundColor: '#38bdf8' },
            { icon: Go, name: 'Go', backgroundColor: '#08afd8' },
            { icon: Mongo, name: 'MongoDb', backgroundColor: '#4ca84b' },

        ]
    },
]

</script>

<style lang="scss">

#relevant-projects {
    color: #0F0F0F;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 3.56rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
        color: #0F0F0F;
        font-family: 'Lusitana';
        font-size: 2.39719rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    @media screen and (max-width: 1028px) {
    padding: 6rem 2.31rem;
    }
}

</style>