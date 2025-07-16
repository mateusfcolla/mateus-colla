<template lang="pug">

section#about
    .left
        h2 A little about myself...
        p
            | I work and specialize in  since 2018. 
            span(  ) {{" "}} web development and design {{" "}}
            | I’m passionate about creating inspiring interfaces and improving applications.
        .button( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')") contact me

    .right
        h2 Languages
        ul
            li Fluent English
            li Native Brazillian Portuguese
            li Basic German

</template>

<script setup>

import { redirect, getLogoSliderLogos } from '@/utils.js'

</script>

<style lang="scss">

#about {
    display: flex;
    border-top: 1px solid #414141;
    position: relative;
    overflow: hidden;

    & > div {
        padding: 3.125rem;
        align-items: flex-start;
        gap: 5.5rem;
        border-bottom: 1px solid #414141;

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
        border-left: 1px solid #414141;

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
        border-left: 1px solid #414141;
        border-right: 1px solid #414141;
        min-height: 32.25rem;
        position: relative;
        overflow: hidden;
        background: #181818;
        box-shadow: 0px 0px 30.5px 0px #ffc4c517;

        h2 {
            color: #C42828;
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: .56rem;

            li {
                font-size: 1.25rem;
                color: #CECECE;
                font-weight: 700;
                line-height: 175%;
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
        margin-bottom: 3rem;
    }

}

</style>