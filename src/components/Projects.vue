<template lang="pug">

section#relevant-projects
    h2 Recent relevant projects
    Project( v-for="project, index in projects" :title="project.title" :subtitle="project.subtitle" :id="`project-${index}`" :description="project.description" :background="project.background" :url="project.url")
        Technology( v-for="tech in project.technologies" :icon="tech.icon" :name="tech.name" :backgroundColor="tech.backgroundColor" )

</template>

<script setup>

import Project from './Project.vue';
import Technology from './Technology.vue';
import { getTechIcons } from '@/utils.js';

import Engeled from '@/assets/imgs/Engeled.png'
import Superpet from '@/assets/imgs/Superpet.png'
import Velope from '@/assets/imgs/Velope.png'
import Oli from '@/assets/imgs/Oli.png'

import { gsap } from 'gsap'
import { onMounted } from 'vue'

const techs = getTechIcons()

const projects = [
    {
        title: 'Oli',
        subtitle: 'Website creation',
        description: 'Creation of the full website',
        background: Oli,
        url: 'http://oliapp.com.br/',
        technologies: [
            techs.wordpress,
            techs.sass,
            techs.tailwind,
            techs.js
        ]
    },
    {
        title: 'Engeled',
        subtitle: 'Website creation',
        description: 'Creation of the full website plus custom features for better user website customization',
        background: Engeled,
        url: 'https://engeled.com.br/',
        technologies: [
            techs.wordpress,
            techs.sass,
            techs.tailwind,
            techs.js
        ]
    },
    {
        title: 'Superpet',
        subtitle: 'Website creation',
        description: 'Creation of the full website plus custom features for better user website customization',
        url: 'https://superpetdelivery.com.br/',
        background: Superpet,
        technologies: [
            techs.react,
            techs.sass,
            techs.tailwind,
            techs.js,
            techs.go,
            techs.mongo,
        ]
    },
    {
        title: 'Velope',
        subtitle: 'Website design',
        description: 'Design of the full website, all pages included',
        url: 'https://velope.com.br/',
        background: Velope,
        technologies: [
            techs.figma,
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
    color: #C42828;
    background: #191919;
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #2b2b2b;
    display: flex;
    flex-direction: column;
    gap: 3.56rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
        color: #FFF;
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