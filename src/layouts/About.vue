<template lang="pug">

section#about
    .left
        h2 A little about myself...
        p
            | I've worked and specialized in
            span(  ) {{" "}} web development and design {{" "}}
            | for 7 years and I’m passionate about creating dynamic and pretty interfaces while also building optimized and fast applications.
        .button( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')") Contact me

    .right
        h2 Languages
        ul
            li Fluent English
            li Native Brazillian Portuguese
            li Basic German
        CurvedLoop(
            marqueeText="Hello! Lets connect! ✦ Oi! Vamos nos conectar! ✦ Hallo! Lass uns verbinden! ✦"
            :speed="loopSpeed"
            :curveAmount="-500"
            :interactive="true"
            direction="right"
            class="multi-language-loop"
        )
LogoDisplayer

</template>

<script setup>
import { redirect, getLogoSliderLogos } from '@/utils.js'
import LogoDisplayer from '@/components/LogoDisplayer.vue'
import CurvedLoop from '@/components/CurvedLoop.vue';
import { ref } from 'vue'

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const loopSpeed = ref(isMobile() ? 3 : 2)

</script>

<style lang="scss">

#about {
    display: flex;
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #2b2b2b;
    position: relative;
    overflow: hidden;

    .multi-language-loop {
        position: absolute;
        top: 0rem;
        width: 100%;
        z-index: 2;
        pointer-events: none;

        @media screen and (max-width: 1028px) {
            top: -2rem;
        }

        text {
            font-size: 4.5rem;
            fill: #962f49;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: 600;
            pointer-events: all;
            cursor: grab;
            user-select: none;

            &.active {
                cursor: grabbing;
            }
        }
    }

    & > div {
        padding: 3.125rem;
        align-items: flex-start;
        gap: 5.5rem;

        @media screen and (max-width: 1028px) {
            width: 100%!important;
            border-right: none!important;
            border-left: none!important;
        }
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 2.56rem;
        width: 50%;
        border-left: 1px solid #2b2b2b;

        b, span {
            color: #ffffff;
            font-weight: 600;
        }
    }

    .right {
        display: flex;
        width: 50%;
        flex-direction: column;
        gap: 2.56rem;
        flex-wrap: wrap;
        border-left: 1px solid #2b2b2b;
        border-right: 1px solid #2b2b2b;
        min-height: 32.25rem;
        position: relative;
        overflow: hidden;
        box-shadow: 0px 0px 30.5px 0px #7070701e;

        h2 {
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background: linear-gradient(120deg, rgba(255, 0, 98, 0.767) 40%, rgb(255, 40, 58) 50%, rgba(255, 0, 98, 0.767) 60%);
            background-size: 200% 100%;
            background-clip: text;
        }

        &::after {
            content: '';
            position: absolute;
            pointer-events: none;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: .6;
            z-index: 1;
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: .56rem;

            li {
                font-size: 1.1rem;
                color: #d4d4d4;
                line-height: 150%;

                @media screen and (max-width: 1028px) {
                font-size: 1rem;
                }
            }
        }

        #threejs-container {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 30%;
            top: 50%;

            @media screen and (max-width: 1028px) {
                left: 0;
                top: 60%;
                pointer-events: none;
            }
            canvas {
                width: 100%!important;
                height: 100%!important;
                display: block;
            }
        }
    }

    .socials {
        display: flex;
        gap: .6rem;
        bottom: 2.31rem;

        a {
            cursor: pointer;

            &:hover {
                transform: scale(1.08);
            }
        }
    }

    @media screen and (max-width: 1028px) {
        flex-direction: column;
    }

}

#tech-slider {
    border-top: 1px solid #2b2b2b;
    border-bottom: 1px solid #2b2b2b;
    margin-top: -1px;
}

</style>