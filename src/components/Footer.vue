<template lang="pug">

footer
    .footer-section
        .subsection
            a( @click="redirect('https://w.app/qrm5ts', '_blank')" ).footer-item
                img( :src="whatsapp" alt="Whatsapp" )
                | (48) 9 9110-0010
            a( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')" ).footer-item
                img( :src="gmail" alt="Gmail" )
                | Send me a message
        .sub-section
            h1.logo
                img( @click="redirect('/')" :src="Logo" )
    .footer-section
        .subsection
            RouterLink( to="/" ) home
            a( v-for="item, index in navItems" @click="redirect(item.to)" :key="'routerItem' + index" ) {{ item.text }}
        .subsection
            .socials
                a( @click="redirect('https://github.com/mateusfcolla', '_blank')" rel="noopener noreferrer")
                    img( :src="github" alt="My Github")
                a( @click="redirect('https://codepen.io/coall_fcm', '_blank')" rel="noopener noreferrer")
                    img( :src="codepen" alt="My Codepen")
                a( @click="redirect('https://dribbble.com/coall_fcm', '_blank')" rel="noopener noreferrer")
                    img( :src="dribbble" alt="My Dribbble")

</template>

<script setup>

import whatsapp from '@/assets/icons/whatsapp.svg'
import gmail from '@/assets/icons/gmail.svg'
import github from '@/assets/icons/socials-github.svg'
import codepen from '@/assets/icons/socials-codepen.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'
import { redirect } from '@/utils.js'

import Logo from '@/assets/logo.svg'

const navItems = [
    { text: 'relevant projects', to: '#relevant-projects' },
    { text: 'about me', to: '#about' },
    { text: 'what I offer', to: '#offer' },
    { text: 'contact', to: '#contact' },
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
    border-top: 1px solid #4D4D4D;

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
            color: white;
            display: flex;
            align-items: center;
            gap: .5rem;
            font-weight: 500;
            cursor: pointer;

            &:hover {
                color: #0f78d2;
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