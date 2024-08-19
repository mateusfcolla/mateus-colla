<template lang="pug">
main
    p Hey! I’m Mateus Felipe, web developer and designer
    h1 Let’s build beautiful websites
        br
        | {{" "}}together
    .actions
        button contact me
        button.outline what I've been working on
    .socials
        a(href="https://github.com/mateusfcolla", target="_blank", rel="noopener noreferrer")
            img( :src="github" alt="My Github")
        a(href="https://codepen.io/coall_fcm", target="_blank", rel="noopener noreferrer")
            img( :src="codepen" alt="My Codepen")
        a(href="https://dribbble.com/coall_fcm", target="_blank", rel="noopener noreferrer")
            img( :src="dribbble" alt="My Dribbble")
    LogoSlider.tech-slider

</template>

<script setup>

import github from '@/assets/icons/socials-github.svg'
import codepen from '@/assets/icons/socials-codepen.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'
import LogoSlider from './LogoSlider.vue'

</script>

<style lang="scss" scoped>

main {
    min-height: 80vh;
    padding: 2.31rem 7.38rem;
    position: relative;
    padding-top: 30vh;

    @media screen and (max-width: 1028px) {
        padding: 1rem 2.31rem;
        padding-top: 30vh;
    }

    p {
        color: #D3D2D8;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: .6rem;
    }

    .tech-slider {
        position: absolute;
        top: 0;
        right: 7.38rem;
        height: 100%;

        @media screen and (max-width: 1028px) {
            position: relative;
            padding-top: 5rem;
            padding-bottom: 8rem;
            top: unset;
            right: unset;
            top: 100%;
            left: 0;
        }
    }

    h1 {
        color: #FFF;
        font-family: Lusitana;
        font-size: 2.39719rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: pre-line;
        margin-bottom: 2rem;

        @media screen and (max-width: 1028px) {
            br {
                display: none;
            }
        }
    }

    .actions {
        display: flex;
        gap: 1rem;

        @media screen and (max-width: 1028px) {
            flex-direction: column;
        }
    }

    .socials {
        position: absolute;
        display: flex;
        gap: .6rem;
        bottom: 2.31rem;

        a:hover {
            transform: scale(1.08);
        }
    }

    button {
        display: flex;
        padding: 0.5rem 1.125rem;
        justify-content: center;
        font-family: 'Inter', sans-serif;
        align-items: center;
        gap: 0.625rem;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        border-radius: 0;
        color: black;
        border: 1px solid white;
        background: white;
        width: fit-content;

        &:hover {
            background: none;
            color: white;
            cursor: pointer;
        }

        &.outline {
            background: none;
            border: 1px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }
        }
    }
}

</style>