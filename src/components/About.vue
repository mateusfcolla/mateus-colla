<template lang="pug">

section#about
    .left
        h2 A little about myself...
        p
            | I work and specialize in 
            span(  ) {{" "}} UI/UX design and Web development {{" "}}
            | since 2018. I’m passionate about creating things, building pretty applications, as well as music and creating interfaces.
        p
            | I hold a technical degree in
            span {{" "}} Systems Analysis and Development {{" "}}
            | and am currently in my first semester of
            span {{" "}} Computer Science {{" "}}
            | at Unisul.
        .socials
            a( @click="redirect('https://github.com/mateusfcolla', '_blank')" rel="noopener noreferrer")
                img( :src="github" alt="My Github")
            a( @click="redirect('https://codepen.io/coall_fcm', '_blank')" rel="noopener noreferrer")
                img( :src="codepen" alt="My Codepen")
            a( @click="redirect('https://dribbble.com/coall_fcm', '_blank')" rel="noopener noreferrer")
                img( :src="dribbble" alt="My Dribbble")
    .right
        a.logo-slide( v-for="logo, index in orderedLogos" :href="logo.link" target="_blank" :key="logo.name+index" )
            img( :src="logo.img" :alt="logo.name" )

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { redirect } from '@/utils.js'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

import docker from '@/assets/logo-slider/docker.svg'
import express from '@/assets/logo-slider/express.svg'
import go from '@/assets/logo-slider/go.svg'
import jquery from '@/assets/logo-slider/jquery.svg'
import mongodb from '@/assets/logo-slider/mongodb.svg'
import mysql from '@/assets/logo-slider/mysql.svg'
import node from '@/assets/logo-slider/node.svg'
import postman from '@/assets/logo-slider/postman.svg'
import react from '@/assets/logo-slider/react.svg'
import sass from '@/assets/logo-slider/sass.svg'
import tailwind from '@/assets/logo-slider/tailwind.svg'
import typescript from '@/assets/logo-slider/typescript.svg'
import vue from '@/assets/logo-slider/vue.svg'
import wordpress from '@/assets/logo-slider/wordpress.svg'
import redux from '@/assets/logo-slider/redux.svg'
import vite from '@/assets/logo-slider/vite.svg'
import photoshop from '@/assets/logo-slider/photoshop.svg'
import illustrator from '@/assets/logo-slider/illustrator.svg'
import github from '@/assets/icons/socials-github.svg'
import codepen from '@/assets/icons/socials-codepen.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'

const logos = [
    { name: "Docker", img: docker, link: "https://www.docker.com/" },
    { name: "ExpressJS", img: express, link: "https://expressjs.com/" },
    { name: "Go Lang", img: go, link: "https://go.dev/" },
    { name: "JQuery", img: jquery, link: "https://jquery.com/" },
    { name: "MongoDb", img: mongodb, link: "https://www.mongodb.com/" },
    { name: "MySQL", img: mysql, link: "https://www.mysql.com/" },
    { name: "NodeJs", img: node, link: "https://nodejs.org/" },
    { name: "Postman", img: postman, link: "https://www.postman.com/" },
    { name: "ReactJs", img: react, link: "https://react.dev/" },
    { name: "Sass", img: sass, link: "https://sass-lang.com/" },
    { name: "Tailwind", img: tailwind, link: "https://tailwindcss.com/" },
    { name: "Typescript", img: typescript, link: "https://www.typescriptlang.org/" },
    { name: "Vue", img: vue, link: "https://vuejs.org/" },
    { name: "Wordpress", img: wordpress, link: "https://wordpress.com/" },
    { name: "Redux", img: redux, link: "https://redux.js.org/" },
    { name: "Vite", img: vite, link: "https://vitejs.dev/" },
    { name: "Illustrator", img: illustrator, link: "https://www.adobe.com/br/products/illustrator/campaign/pricing.html?gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC0FiJ8r8vxl1svJiGFo6X_Dmb5dWXYH6G2NSVGRjCyqSa7b6FnIX4QaAuTjEALw_wcB&sdid=KQPNY&mv=search&ef_id=Cj0KCQjwwuG1BhCnARIsAFWBUC0FiJ8r8vxl1svJiGFo6X_Dmb5dWXYH6G2NSVGRjCyqSa7b6FnIX4QaAuTjEALw_wcB:G:s&s_kwcid=AL!3085!3!442396626644!e!!g!!illustrator!188190582!10039578942&gad_source=1" },
    { name: "Photoshop", img: photoshop, link: "https://www.adobe.com/br/products/photoshop/landpa.html?gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC1cIfXm80MZKA-0L3C6qQb4Q5eAOsu4gSuaMsdNDyO2cUSqPNw7gjcaAlUhEALw_wcB&sdid=KQPOM&mv=search&ef_id=Cj0KCQjwwuG1BhCnARIsAFWBUC1cIfXm80MZKA-0L3C6qQb4Q5eAOsu4gSuaMsdNDyO2cUSqPNw7gjcaAlUhEALw_wcB:G:s&s_kwcid=AL!3085!3!534509111647!e!!g!!photoshop!188192502!10077842982&gad_source=1" },
]

const orderedLogos = ref(new Array())

const getOrderedLogos = () => {
    const sorted = logos.sort((a, b) => 0.8 - Math.random());
    return sorted;
}

onMounted(() => {
    orderedLogos.value = getOrderedLogos()

    const scrollConfig = {
        trigger: '#about',
        start: '-130%',
        end: '-80%',
        scrub: .6,
    }

    gsap.from('.left', {
        scrollTrigger: scrollConfig,
        opacity: 0,
        y: 200,
        x: -200,
    })

    gsap.from('.right', {
        scrollTrigger: scrollConfig,
        opacity: 0,
        x: 400,
        scale: 2,
    })
})

</script>

<style lang="scss">

#about {
    display: flex;
    gap: 5.5rem;
    margin-top: 6rem;
    margin-bottom: 6rem;
    justify-content: space-between;

    @media screen and (max-width: 1028px) {
        flex-direction: column;
        margin-bottom: 3rem;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 2.56rem;
        max-width: 39.3125rem;

        b, span {
            color: #ffffff;
            font-weight: 600;
        }
    }

    .right {
        display: flex;
        max-width: 40.4375rem;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 1.625rem 2.3125rem;
        flex-wrap: wrap;

        .logo-slide img{
            width: 5.875rem;
            height: 5.875rem;
            filter: grayscale(00%);

            @media screen and (max-width: 1028px) {
                display: none;
            }

            &:hover {
                transform: scale(1.1);
                filter: grayscale(0%);
            }
        }
    }

    .socials {
        display: flex;
        gap: .6rem;
        bottom: 2.31rem;

        a {
            cursor: pointer;

            &:hover {
                transform: scale(1.08);
            }
        }
    }
}

</style>