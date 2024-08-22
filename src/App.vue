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
})

const titleScroller = text => {
    document.title = text;
    setTimeout(() => titleScroller(text.substr(1) + text.substr(0, 1)), 400);
}

</script>