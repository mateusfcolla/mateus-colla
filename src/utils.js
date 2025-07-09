// Logo Slider Logos
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
import dotnet from '@/assets/logo-slider/dotnet.svg'
import javascript from '@/assets/logo-slider/javascript.svg'
import jest from '@/assets/logo-slider/jest.svg'
import aws from '@/assets/logo-slider/aws.svg'
import php from '@/assets/logo-slider/php.svg'
import graphql from '@/assets/logo-slider/graphql.svg'

// Technologie Icons
import Wordpress from '@/assets/technologies/wordpress.svg?component'
import Sass from '@/assets/technologies/sass.svg?component'
import Tailwind from '@/assets/technologies/tailwind.svg?component'
import Go from '@/assets/technologies/go.svg?component'
import React from '@/assets/technologies/react.svg?component'
import Mongo from '@/assets/technologies/mongo.svg?component'
import Figma from '@/assets/technologies/figma.svg?component'
import Vue from '@/assets/technologies/vue.svg?component'
import Typescript from '@/assets/technologies/typescript.svg?component'
import Express from '@/assets/technologies/express.svg?component'
import Node from '@/assets/technologies/node.svg?component'
import Dotnet from '@/assets/technologies/dotnet.svg?component'
import Javascript from '@/assets/technologies/javascript.svg?component'
import Nuxt from '@/assets/technologies/nuxt.svg?component'
import Next from '@/assets/technologies/next.svg?component'
import Php from '@/assets/technologies/php.svg?component'

export const redirect = (url, target = '_top') => {
    window.open(url, target)
}

export const scrollTo = id => {
    const element = document.querySelector(id);

    window.scrollTo({
        top: element.offsetTop - 200,
        behavior: 'smooth'
      });
}

export const getLogoSliderLogos = () => {
    return [
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
        { name: ".NET", img: dotnet, link: "https://dotnet.microsoft.com/" },
        { name: "Javascript", img: javascript, link: "" },
        { name: "Illustrator", img: illustrator, link: "https://www.adobe.com/br/products/illustrator/campaign/pricing.html?gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC0FiJ8r8vxl1svJiGFo6X_Dmb5dWXYH6G2NSVGRjCyqSa7b6FnIX4QaAuTjEALw_wcB&sdid=KQPNY&mv=search&ef_id=Cj0KCQjwwuG1BhCnARIsAFWBUC0FiJ8r8vxl1svJiGFo6X_Dmb5dWXYH6G2NSVGRjCyqSa7b6FnIX4QaAuTjEALw_wcB:G:s&s_kwcid=AL!3085!3!442396626644!e!!g!!illustrator!188190582!10039578942&gad_source=1" },
        { name: "Photoshop", img: photoshop, link: "https://www.adobe.com/br/products/photoshop/landpa.html?gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC1cIfXm80MZKA-0L3C6qQb4Q5eAOsu4gSuaMsdNDyO2cUSqPNw7gjcaAlUhEALw_wcB&sdid=KQPOM&mv=search&ef_id=Cj0KCQjwwuG1BhCnARIsAFWBUC1cIfXm80MZKA-0L3C6qQb4Q5eAOsu4gSuaMsdNDyO2cUSqPNw7gjcaAlUhEALw_wcB:G:s&s_kwcid=AL!3085!3!534509111647!e!!g!!photoshop!188192502!10077842982&gad_source=1" },
        { name: "Jest", img: jest, link: "https://jestjs.io/" },
        { name: "AWS", img: aws, link: "https://aws.amazon.com/" },
        { name: "PHP", img: php, link: "https://www.php.net/" },
        { name: "GraphQl", img: graphql, link: "https://graphql.org/" },
    ]
}

export const getTechIcons = () => {
    return {
        wordpress: {
            icon: Wordpress,
            name: 'Wordpress',
            backgroundColor: '#33a1d3'
        },
        sass: {
            icon: Sass,
            name: 'Sass',
            backgroundColor: '#cd6799'
        },
        tailwind: {
            icon: Tailwind,
            name: 'Tailwind',
            backgroundColor: '#38bdf8'
        },
        react: {
            icon: React,
            name: 'React',
            backgroundColor: '#00d8ff'
        },
        go: {
            icon: Go,
            name: 'Go',
            backgroundColor: '#08afd8'
        },
        mongo: {
            icon: Mongo,
            name: 'MongoDb',
            backgroundColor: '#4ca84b'
        },
        figma: {
            icon: Figma,
            name: 'Figma',
            backgroundColor: '#f24e1e'
        },
        vue: {
            icon: Vue,
            name: "Vue",
            backgroundColor: '#4fc08d'
        },
        ts: {
            icon: Typescript,
            name: "Typescript",
            backgroundColor: '#007acc'
        },
        express: {
            icon: Express,
            name: "Express",
            backgroundColor: '#f7e025'
        },
        node: {
            icon: Node,
            name: "Node",
            backgroundColor: '#8cc84b'
        },
        dotnet: {
            icon: Dotnet,
            name: ".NET",
            backgroundColor: '#512bd4'
        },
        js: {
            icon: Javascript,
            name: "Javascript",
            backgroundColor: '#f7df1e'
        },
        nuxt: {
            icon: Nuxt,
            name: "Nuxt",
            backgroundColor: '#00dc82'
        },
        next: {
            icon: Next,
            name: "Next",
            backgroundColor: '#173e6a'
        },
        php: {
            icon: Php,
            name: "PHP",
            backgroundColor: '#777bb3'
        },
    }
}