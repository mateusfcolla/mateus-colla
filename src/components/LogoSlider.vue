<template lang="pug">

.logo-slider
    .logos-slide
        a.logo-slide( v-for="logo, index in orderedLogos[0]" :href="logo.link" target="_blank" :key="logo.name+index" )
            img( :src="logo.img" :alt="logo.name" )
    .logos-slide.reverse
        a.logo-slide( v-for="logo, index in orderedLogos[1]" :href="logo.link" target="_blank" :key="logo.name+index" )
            img( :src="logo.img" :alt="logo.name" )

</template>

<script setup>

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

import { onMounted, ref } from 'vue'

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
    const arrays = [ sorted.slice(0, sorted.length / 2), sorted.slice(sorted.length / 2, sorted.length) ];
    return arrays;
}

onMounted(() => {
    orderedLogos.value = getOrderedLogos()
})



</script>

<style lang="scss" >

.logo-slider {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    gap: 1.8rem;
    display: flex;
    padding: 0 .2rem;
    height: 100%;

    @media screen and (max-width: 1028px) {
        flex-direction: column;
    }

    &:hover .logos-slide {
        animation-play-state: paused;
    }

    .logos-slide {
        display: flex;
        height: fit-content;
        flex-direction: column;
        animation: slideY 13s infinite linear alternate;

        &.reverse {
            animation-direction: alternate-reverse;
        }

        @media screen and (max-width: 1028px) {
            flex-direction: row;
            animation: slideX 6s infinite linear;
        }

        .logo-slide {
            margin-bottom: 1.8rem;

            @media screen and (max-width: 1028px) {
                margin-right: 1.6rem;
                margin-bottom: 0;
            }

            &:hover {
                transform: scale(1.08);
            }

            img {
                width: 6.94556rem;
                height: 6.94556rem;
            }
        }
    }
}

@keyframes slideY {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-43%);
    }
}

@keyframes slideX {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-43%);
    }
}

</style>