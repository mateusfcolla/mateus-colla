<template lang="pug">

section#what-i-offer
    h2 What I offer
    .offers
        .offer
            h4 Web Development
            p Full website development based on a User Interface, using modern technologies like Vue, React and Typescript to grant speed and fluidity on the websites.
        .offer
            h4 UI Design
            p Full design for your product based on necessity making use of modern design patterns, beautiful components and strong design principles.
    .button( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')") Let's work together!

</template>

<script setup>

import { redirect } from '@/utils.js'

</script>

<style lang="scss">

#what-i-offer {
    background: #ffffff;
    color: #0F0F0F;
    gap: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8rem;

    .offers {
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 1028px) {
            flex-direction: column;
            gap: 3rem;
        }

        .offer {
            max-width: 40%;
            display: flex;
            flex-direction: column;
            gap: 1.36rem;

            @media screen and (max-width: 1028px) {
                max-width: unset;
            }
        }
    }

    .button {
        background: #0F0F0F;
        color: #ffffff;
        padding: 1rem 2rem;

        &:hover {
            background: #FFFFFF;
            color: #0F0F0F;
            border-color: #0F0F0F;
        }
    }

    h2 {
        color: #0F0F0F;
        text-align: center;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    h4 {
        color: #0F0F0F;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 600;
        line-height: 175%;
    }

    p {
        color: #444;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 175%;
    }
}

</style>