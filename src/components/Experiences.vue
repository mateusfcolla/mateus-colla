<template lang="pug">

section#experiences
    h2#experiencestitle.title Experiences
    Splide( :options="SplideOptions" :has-track="false" aria-labelledby="#experiencestitle" ).experiences.experiences__desktop
        SplideTrack
            SplideSlide.experience( v-for="experience, index in experiences" :key="`experience${index}`" )
                p {{ experience.time }}
                h4 {{ experience.title }}
                ul
                    li( v-for="doing in experience.doings" ) {{ doing }}
                .techs( v-if="experience.technologies.length > 0" )
                    Technology( v-for="tech, index in experience.technologies" :key="`tech${index}`" :icon="tech.icon" :backgroundColor="tech.backgroundColor" :name="tech.name" )
    .experiences.experiences__mobile
        .experience.is-active( v-for="experience, index in experiences" :key="`experience${index}`" )
            p {{ experience.time }}
            h4 {{ experience.title }}
            ul
                li( v-for="doing in experience.doings" ) {{ doing }}
            .techs
                Technology( v-for="tech, index in experience.technologies" :key="`tech${index}`" :icon="tech.icon" :backgroundColor="tech.backgroundColor" :name="tech.name" )
</template>

<script setup>

import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import Technology from './Technology.vue';
import { getTechIcons } from '@/utils.js'
import '@splidejs/vue-splide/css/core';
import { onMounted } from 'vue'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const techs = getTechIcons()

const SplideOptions = {
    perPage: 1,
    type: 'loop',
    pagination: false,
    rewindByDrag: true,
    fixedWidth: '51.6875rem',
    arrowPath: 'M16.8929 13.6928C17.2834 13.3023 17.9166 13.3023 18.3071 13.6928L23.9071 19.2928C24.0946 19.4803 24.2 19.7347 24.2 19.9999C24.2 20.2651 24.0946 20.5195 23.9071 20.707L18.3071 26.307C17.9166 26.6975 17.2834 26.6975 16.8929 26.307C16.5023 25.9165 16.5023 25.2833 16.8929 24.8928L21.7858 19.9999L16.8929 15.107C16.5023 14.7165 16.5023 14.0833 16.8929 13.6928Z'
}

const experiences = [
    {
        time: 'october 2024 - today',
        title: 'Senior Web Developer, G-P',
        doings: [
            'Making improvements in speed and performance, creating new pages, refactoring components and making general improvements on the company’s website.',
            'Being a part in agile development methodologies ( Scrum ), adding documentation about what I do, and using the Atlasian workspace to manage tasks and documentation.'
        ],
        technologies: [
            techs.next,
            techs.wordpress,
            techs.tailwind,
            techs.js,
            techs.php,
            techs.sass,
        ]
    },
    {
        time: 'july 2024 - january 2025',
        title: 'Web Developer, Mosyle',
        doings: [
            "Using the most recent technologies to make general improvements, add new features, create components and maintain the company's webapp.",
        ],
        technologies: [
            techs.react,
            techs.dotnet,
            techs.tailwind,
            techs.ts,
            techs.sass,
        ]
    },
    {
        time: 'october 2018 - february 2025',
        title: 'Web Developer Freelance, WKode',
        doings: [
            'Created and maintained websites, including landing pages, institutional websites and e-commerces, having in mind best practices of coding, focusing on performance and SEO.',
        ],
        technologies: [
            techs.next,
            techs.go,
            techs.wordpress,
            techs.tailwind,
            techs.react,
            techs.sass,
            techs.ts,
            techs.js,
            techs.figma,
            techs.php,
            techs.mongo,
        ]
    },
    {
        time: 'april 2021 - april 2024',
        title: 'Web Developer & UI/UX Designer,  JettaCargo',
        doings: [
            "Using recent technologies to implement new features, screens and improving the user experience. Created an institutional website from scratch, implemented Lambda functions to improve API fatures and more.",
            'The webapp went through an almost complete UI change, where I made and mostly applied all the changes',
        ],
        technologies: [
            techs.vue,
            techs.nuxt,
            techs.express,
            techs.sass,
            techs.node,
            techs.js,
            techs.figma,
        ]
    },
    {
        time: 'febuary 2020 - march 2021',
        title: 'Front End Wordpress Developer,  Escritolândia',
        doings: [
            "Designed, developed and maintained an e-commerce website from scratch, using custom themes and plugins prioritizing performance, user experience and intuitive interfaces based on Brazil's most famous e-commerces.",
        ],
        technologies: [
            techs.wordpress,
            techs.js,
            techs.sass,
            techs.php,
            techs.figma,
        ]
    },
]

onMounted(() => {

    const scrollConfig = {
        trigger: '#experiences',
        start: '-130%',
        end: '-80%',
        scrub: .6,
    }

    gsap.from('#experiences h2', {
        scrollTrigger: scrollConfig,
        opacity: 0,
        scale: 2,
        y: 200,
    })

    gsap.from('#experiences .experiences', {
        scrollTrigger: scrollConfig,
        opacity: 0,
    })
})

</script>

<style lang="scss">

#experiences {
    padding-bottom: 8rem;
}

h2.title {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
}

.experiences {
    position: relative;
    overflow: hidden;

    &__mobile {
        display: none;
    }

    @media screen and (max-width: 1028px) {

        &__mobile {
            display: unset;
        }

        &__desktop {
            display: none;
        }
    }

    .splide__arrow {
        position: absolute;
        background: #FFF;
        border: 1px solid #C5C5C5;
        border-radius: 100%;
        width: 3.125rem;
        height: 3.125rem;
        z-index: 6;
        cursor: pointer;
        top: 50%;
        right: .4rem;
        transition: .3s;
        justify-content: center;
        align-items: center;
        transform: translateY(-50%);

        &:hover {
            background: #bfbfbf;
        }

        svg {
            path {
                width: auto;
                height: auto;
            }
        }

        &--prev {
            display: none;
        }
    }
}

.experience {
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    // gap: 1rem;
    flex-shrink: 0;
    border: 1px solid #4D4D4D;
    opacity: .6;
    margin-right: 2rem;

    p {
        color: #E7E7E7;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }

    h4 {
        color: #F9F9F9;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        margin-bottom: 1rem;
    }

    ul {

        margin-left: 1.5rem;

        li {
            color: #AFAFAF;
            font-size: 1.1875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }

    }

    .techs {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        margin-left: 1.5rem;
        flex-wrap: wrap;

        .technology_wrapper {
            pointer-events: none;
        }
    }

    &.is-active {
        opacity: 1;

        .technology_wrapper {
            pointer-events: all;
        }
    }

    @media screen and (max-width: 1028px) {
        margin-right: 0;
        margin-bottom: 2rem;
        text-align: center;

        p {
            width: 100%;
            margin-bottom: .4rem;
            color: #616161;
        }

        ul {
            list-style-type: none;
            margin-left: 0;
        }

        li {
            margin: 1rem 0;
        }
    }
}

</style>