<template lang="pug">

.section-separator
    .line
    img( :src="downArrow" alt="Next section" )
    .line

</template>

<script setup>

import downArrow from '@/assets/icons/down-arrow.svg'

</script>

<style lang="scss">

.section-separator {
    width: calc(100% - 7.38rem - 7.38rem);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 6rem auto;

    @media screen and (max-width: 1028px) {
        width: calc(100% - 2.31rem - 2.31rem);
    }

    .line {
        width: 100%;
        height: 2px;
        background: #727272;
        border-radius: .2rem;
    }

    img {
        margin-top: .2rem;
        animation: float 6s linear infinite;
    }
}

@keyframes float {
    0% {
        transform: translateY(0%);
    }
    25% {
        transform: translateY(-2px);
    }
    50% {
        transform: translateY(0%);
    }
    75% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0%);
    }
}

</style>