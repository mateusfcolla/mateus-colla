<template lang="pug">

footer
    .footer-section
        .subsection
            a( @click="redirect('tel:+4915174445675', '_blank')" ).footer-item
                img( :src="phone" alt="Phone" )
                | +49 151 74445675
            a( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')" ).footer-item
                img( :src="gmail" alt="Gmail" )
                | Send me a message
        .sub-section
            h1.logo
                img( @click="redirect('/')" :src="Logo" )
    .footer-section
        .subsection
            a( v-for="item, index in navItems" @click="scrollTo(item.to)" :key="'routerItem' + index" :class="{ active: item.active }" ) {{ item.text }}
            a( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')" ) contact
        .subsection
            .socials
                a( @click="redirect('https://github.com/mateusfcolla', '_blank')" rel="noopener noreferrer")
                    img( :src="github" alt="My Github")
                a( @click="redirect('https://dribbble.com/coall_fcm', '_blank')" rel="noopener noreferrer")
                    img( :src="dribbble" alt="My Dribbble")

</template>

<script setup>

import phone from '@/assets/icons/phone.svg'
import gmail from '@/assets/icons/gmail.svg'
import github from '@/assets/icons/socials-github.svg'
import codepen from '@/assets/icons/socials-codepen.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'
import { redirect, scrollTo } from '@/utils.js'

import Logo from '@/assets/logo.svg'

const navItems = [
    { text: 'experiences', to: '#experiences', active: true },
    { text: 'technologies', to: '#technologies' },
    { text: 'portfolio', to: '#relevant-projects' },
]


</script>

<style lang="scss">

footer {
    display: flex;
    width: 100vw;
    padding: 2rem 7.5rem;
    align-items: flex-start;
    gap: 7.5rem;
    flex-shrink: 0;
    background: #0F0F0F;
    border-top: 1px solid #2b2b2b;

    @media screen and (max-width: 1028px) {
        flex-direction: column;
        gap: 4rem;
    }

    .footer-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 18rem;

        .subsection {
            display: flex;
            flex-direction: column;
            gap: 1.38rem;
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

        a {
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: .5rem;
            font-weight: 500;
            cursor: pointer;

            &:hover {
                color: #C42828;
            }
        }

        @media screen and (max-width: 1028px) {
            height: auto;
            gap: 4rem;
            text-align: center;
            justify-content: center;
            align-items: center;
            width: 100%;

            &:first-of-type {
                flex-direction: column-reverse;
            }

            a {
                text-align: center;
            }

            .subsection {
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        }
    }

    @media screen and (max-width: 1028px) {
        padding: 4rem 2.31rem;
    }
}

</style>