<template lang="pug">

section#relevant-projects
    h2 Portfolio

    .project( v-for="(project, index) in projects" :key="`project-${index}-${project.title}`" :id="`project-${index}`" @mousemove="moveBackground(index, $event)" )
        img.project-background( :ref="el => projectBackgrounds[index] = el" :src="project.background" :alt="`Project background for ${project.title}`" )
        .project-content
            a.project-link(:href="project.url" target="_blank")
                h3.project-title {{ project.title }}
                p.project-subtitle {{ project.subtitle }}

</template>

<script setup>

import { onMounted, ref } from 'vue';
import Technology from './Technology.vue';

import Engeled from '@/assets/imgs/Engeled.png'
import Superpet from '@/assets/imgs/Superpet.png'
import Velope from '@/assets/imgs/Velope.png'
import Oli from '@/assets/imgs/Oli.png'

const projects = [
    {
        title: 'Oli',
        subtitle: 'Website',
        background: Oli,
        url: 'http://oliapp.com.br/',
    },
    {
        title: 'Engeled',
        subtitle: 'Website',
        background: Engeled,
        url: 'https://engeled.com.br/',
    },
    {
        title: 'Superpet',
        subtitle: 'Website',
        url: 'https://superpetdelivery.com.br/',
        background: Superpet,
    },
    {
        title: 'Velope',
        subtitle: 'Design',
        url: 'https://velope.com.br/',
        background: Velope,
    },
]

const projectBackgrounds = ref([]);

const moveBackground = (index, event) => {
    const bg = projectBackgrounds.value[index];
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (bg) {
        const percent = (index / (projects.length - 1)) * 2 - 1; // -1 to 1
        const yOffset = -percent * 20; // ← REVERSED here

        bg.style.transform = `translate(${x}px, ${y}px) translate(-80%, calc(-50% + ${yOffset}%))`;
    }
};

onMounted(() => {
    for (let i = 0; i < projects.length; i++) {
        const bg = projectBackgrounds.value[i];
        if (bg) {
            bg.style.transform = 'translate(-80%, -50%)'; // Initial position
        }
    }
});

</script>

<style lang="scss">

#relevant-projects {
    color: #C42828;
    background: #191919;
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #2b2b2b;
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding : 8rem 0;
    position: relative;

    @media screen and (max-width: 1028px) {
        padding: 6rem 2.31rem;
    }

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

    .project {
        position: relative;

        @media screen and (min-width: 1028px) {
            &:hover .project-background {
                opacity: 1;
            }
        }

        .project-background {
            position: absolute;
            pointer-events: none;
            opacity: 0;
            z-index: 0;
            filter: brightness(0.5);
            transition: opacity 0.3s ease, transform 0.1s linear;
        }

        .project-content {
            text-transform: uppercase;
            padding: .2rem 6rem;
            cursor: pointer;
            position: relative;
            z-index: 2;

            @media screen and (min-width: 1028px) {
                &:hover {
                    transform: scale(1.05);

                    h3 {
                        color: #FFF;
                        transform: scale(1.3);
                    }

                    p {
                        color: #FFF;
                    }
                }
            }

            h3 {
                color: #C42828;
                font-weight: 800;
            }

            p {
                color: #cccccc;
                text-align: center;
                font-size: 1.125rem;
                font-weight: 100;
            }
        }
    }

}

</style>