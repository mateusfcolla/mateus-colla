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
import next from '@/assets/logo-slider/next.svg'
import nuxt from '@/assets/logo-slider/nuxt.svg'
import threejs from '@/assets/logo-slider/threejs.svg'
import gutenberg from '@/assets/logo-slider/gutenberg.svg'
import contentful from '@/assets/logo-slider/contentful.svg'
import astro from '@/assets/logo-slider/astro.svg'
import bootstrap from '@/assets/logo-slider/bootstrap.svg'
import acf from '@/assets/logo-slider/acf.svg'
import postgres from '@/assets/logo-slider/postgres.svg'
import webpack from '@/assets/logo-slider/webpack.svg'

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
        { name: "Docker", img: docker, link: "https://www.docker.com/", color: "#2496ed" },
        { name: "ExpressJS", img: express, link: "https://expressjs.com/", color: "#ffffff" },
        { name: "Go Lang", img: go, link: "https://go.dev/", color: "#00add8" },
        { name: "JQuery", img: jquery, link: "https://jquery.com/", color: "#0868ac" },
        { name: "MongoDb", img: mongodb, link: "https://www.mongodb.com/", color: "#47a248" },
        { name: "MySQL", img: mysql, link: "https://www.mysql.com/", color: "#ffffff" },
        { name: "NodeJs", img: node, link: "https://nodejs.org/", color: "#8cc84b" },
        { name: "Postman", img: postman, link: "https://www.postman.com/", color: "#f76935" },
        { name: "ReactJs", img: react, link: "https://react.dev/", color: "#61dafb" },
        { name: "Sass", img: sass, link: "https://sass-lang.com/", color: "#cd6799" },
        { name: "Tailwind", img: tailwind, link: "https://tailwindcss.com/", color: "#38bdf8" },
        { name: "Typescript", img: typescript, link: "https://www.typescriptlang.org/", color: "#007acc" },
        { name: "Vue", img: vue, link: "https://vuejs.org/", color: "#42b883" },
        { name: "Wordpress", img: wordpress, link: "https://wordpress.com/", color: "#21759b" },
        { name: "Redux", img: redux, link: "https://redux.js.org/", color: "#764abc" },
        { name: "Vite", img: vite, link: "https://vitejs.dev/", color: "#646cff" },
        { name: ".NET", img: dotnet, link: "https://dotnet.microsoft.com/", color: "#512bd4" },
        { name: "Javascript", img: javascript, link: "", color: "#f7df1e" },
        { name: "Illustrator", img: illustrator, link: "https://www.adobe.com/br/products/illustrator/", color: "#f24e1e" },
        { name: "Photoshop", img: photoshop, link: "https://www.adobe.com/br/products/photoshop/", color: "#31a8ff" },
        { name: "Jest", img: jest, link: "https://jestjs.io/", color: "#99425f" },
        { name: "AWS", img: aws, link: "https://aws.amazon.com/", color: "#ff9900" },
        { name: "PHP", img: php, link: "https://www.php.net/", color: "#777bb4" },
        { name: "GraphQl", img: graphql, link: "https://graphql.org/", color: "#e10098" },
        { name: "Next.js", img: next, link: "https://nextjs.org/", color: "#ffffff" },
        { name: "Nuxt.js", img: nuxt, link: "https://nuxtjs.org/", color: "#00dc82" },
        { name: "Three.js", img: threejs, link: "https://threejs.org/", color: "#049EF4" },
        { name: "Gutenberg", img: gutenberg, link: "https://wordpress.org/gutenberg/", color: "#ffffff" },
        { name: "Contentful", img: contentful, link: "https://www.contentful.com/", color: "#FAE501" },
        { name: "Astro", img: astro, link: "https://astro.build/", color: "#ff5d01" },
        { name: "Bootstrap", img: bootstrap, link: "https://getbootstrap.com/", color: "#9013FE" },
        { name: "ACF", img: acf, link: "https://www.advancedcustomfields.com/", color: "#0BBAD4" },
        { name: "Postgres", img: postgres, link: "https://www.postgresql.org/", color: "#336791" },
        { name: "Webpack", img: webpack, link: "https://webpack.js.org/", color: "#8ED6FB" }
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