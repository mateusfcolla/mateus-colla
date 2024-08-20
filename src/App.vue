<template lang="pug">

.grained
.cursor

Header

RouterView

Footer

</template>

<script setup>

import Header from './components/Header/Header.vue'
import Footer from './components/Footer.vue'
import 'animate.css';
import { onMounted } from 'vue';

onMounted(() => {
    setTimeout(() => titleScroller(`Hey, I'm Mateus Felipe. Lets work together!  `), 2000)

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })
})

const titleScroller = text => {
    document.title = text;
    setTimeout(() => titleScroller(text.substr(1) + text.substr(0, 1)), 400);
}

</script>