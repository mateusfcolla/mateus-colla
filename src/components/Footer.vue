<template lang="pug">

footer
    .footer-section
        .subsection
            a( href="" target="_blank" ).footer-item
                img( :src="whatsapp" alt="Whatsapp" )
                | (48) 9 9110-0010
            a( href="" target="_blank" ).footer-item
                img( :src="gmail" alt="Gmail" )
                | Send me a message
        .sub-section
            h1.logo
                img( :src="Logo" )
    .footer-section
        .subsection
            RouterLink( to="/" ) home
            a( v-for="item, index in navItems" :href="item.to" :key="'routerItem' + index" ) {{ item.text }}
        .subsection
            .socials
                a(href="https://github.com/mateusfcolla", target="_blank", rel="noopener noreferrer")
                    img( :src="github" alt="My Github")
                a(href="https://codepen.io/coall_fcm", target="_blank", rel="noopener noreferrer")
                    img( :src="codepen" alt="My Codepen")
                a(href="https://dribbble.com/coall_fcm", target="_blank", rel="noopener noreferrer")
                    img( :src="dribbble" alt="My Dribbble")

</template>

<script setup>

import whatsapp from '@/assets/icons/whatsapp.svg'
import gmail from '@/assets/icons/gmail.svg'
import github from '@/assets/icons/socials-github.svg'
import codepen from '@/assets/icons/socials-codepen.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'

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
                transform: scale(.9);
            }

            a:hover {
                transform: scale(1);
            }
        }

        a {
            color: white;
            display: flex;
            align-items: center;
            gap: .5rem;
            font-weight: 500;

            &:hover {
                color: #0f78d2;
            }
        }
    }

    @media screen and (max-width: 1028px) {
        padding: 1rem 2.31rem;
    }
}

</style>