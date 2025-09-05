<template lang="pug">

.grained
.cursor

Loading( :isLoading="isLoading" )

Header( v-if="!isLoading" )

RouterView( v-if="!isLoading" )

Footer( v-if="!isLoading" )

</template>

<script setup>

import Header from './components/Header/Header.vue'
import Footer from './components/Footer.vue'
import Loading from './components/Loading.vue'
import 'animate.css';
import { onMounted, ref } from 'vue';

const isLoading = ref(true);

function preloadImages() {
    const images = Array.from(document.images);
    if (images.length === 0) return Promise.resolve();
    return Promise.all(
        images.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = img.onerror = resolve;
            });
        })
    );
}

onMounted(() => {
    Promise.all([
        document.fonts.ready,
        preloadImages()
    ]).then(() => {
        isLoading.value = false;
    });

    setTimeout(() => titleScroller(`Hey, I'm Mateus Felipe. Lets work together!  `), 300);
});

const titleScroller = text => {
    document.title = text;
    setTimeout(() => titleScroller(text.substr(1) + text.substr(0, 1)), 400);
}

</script>