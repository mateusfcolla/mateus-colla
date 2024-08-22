<template lang="pug">

section#relevant-projects
    h2 Recent relevant projects
    Project( v-for="project, index in projects" :title="project.title" :subtitle="project.subtitle" :id="`project-${index}`" :description="project.description" :background="project.background" :url="project.url")
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
import Figma from '@/assets/technologies/figma.svg?component'

import Engeled from '@/assets/imgs/Engeled.png'
import Superpet from '@/assets/imgs/Superpet.png'
import Velope from '@/assets/imgs/Velope.png'

import { gsap } from 'gsap'
import { onMounted } from 'vue'

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
    {
        title: 'Velope',
        subtitle: 'Website design',
        description: 'Design of the full website, all pages included',
        url: 'https://velope.com.br/',
        background: Velope,
        technologies: [
            { icon: Figma, name: 'Figma', backgroundColor: '#f24e1e' },
        ]
    },
]

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {

    const scrollConfig = {
        trigger: '#relevant-projects',
        scrub: .2,
    }

    gsap.from('#relevant-projects h2', {
        scrollTrigger: {
            ...scrollConfig,
            trigger: 'main h1',
            start: '-5%',
            end: '-70%',
        },
        y: 200,
        scale: 2,
        opacity: 0,
    })

    projects.forEach((project, index) => {
        if(index%2 !== 0) {
            gsap.from(`#project-${index}`, {
                scrollTrigger: {
                    ...scrollConfig,
                    trigger: `#project-${index}`,
                    end: '-60%',
                },
                x: 300,
                y: 100,
                scale: .7,
                opacity: 0,
            })
        }
        else {
            gsap.from(`#project-${index}`, {
                scrollTrigger: {
                    ...scrollConfig,
                    trigger: `#project-${index}`,
                    end: '-60%',
                },
                x: -300,
                y: 100,
                scale: .7,
                opacity: 0,
            })
        }
    })

})

</script>

<style lang="scss">

#relevant-projects {
    color: #0F0F0F;
    background: #ffffff;
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
        animation: test linear;
        animation-timeline: scroll;
        z-index: 1;
    }

    @media screen and (max-width: 1028px) {
        padding: 6rem 2.31rem;
    }
}

@keyframes test {
    from {
        scale: 2;
    }
    to {
        scale: 1;
    }
}

</style>