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

export const technologieSliderLogos = () => {
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
        { name: "Illustrator", img: illustrator, link: "https://www.adobe.com/br/products/illustrator/campaign/pricing.html?gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC0FiJ8r8vxl1svJiGFo6X_Dmb5dWXYH6G2NSVGRjCyqSa7b6FnIX4QaAuTjEALw_wcB&sdid=KQPNY&mv=search&ef_id=Cj0KCQjwwuG1BhCnARIsAFWBUC0FiJ8r8vxl1svJiGFo6X_Dmb5dWXYH6G2NSVGRjCyqSa7b6FnIX4QaAuTjEALw_wcB:G:s&s_kwcid=AL!3085!3!442396626644!e!!g!!illustrator!188190582!10039578942&gad_source=1" },
        { name: "Photoshop", img: photoshop, link: "https://www.adobe.com/br/products/photoshop/landpa.html?gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC1cIfXm80MZKA-0L3C6qQb4Q5eAOsu4gSuaMsdNDyO2cUSqPNw7gjcaAlUhEALw_wcB&sdid=KQPOM&mv=search&ef_id=Cj0KCQjwwuG1BhCnARIsAFWBUC1cIfXm80MZKA-0L3C6qQb4Q5eAOsu4gSuaMsdNDyO2cUSqPNw7gjcaAlUhEALw_wcB:G:s&s_kwcid=AL!3085!3!534509111647!e!!g!!photoshop!188192502!10077842982&gad_source=1" },
    ]
}