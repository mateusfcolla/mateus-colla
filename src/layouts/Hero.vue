<template lang="pug">
main#hero(ref="heroSection")
    .plasma-wrapper
        Plasma(
            :scale="2"
            :mouseInteractive="true"
            :opacity="0.3"
            :speed="1.6"
            color="#ff0505"
        )
    h2 Hey! I'm Mateus Felipe
    h1
        span.word Web Developer
        span.word UI/UX Designer
    .socials
        a( @click="redirect('https://github.com/mateusfcolla', '_blank')" rel="noopener noreferrer")
            img( :src="github" alt="My Github")
        a( @click="redirect('https://dribbble.com/coall_fcm', '_blank')" rel="noopener noreferrer")
            img( :src="dribbble" alt="My Dribbble")
    .actions
        .button( @click="scrollTo('#relevant-projects')" ).outline What I've been working on
    .contact
        a( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')" ) felipe.colla.m@gmail.com

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { scrollTo } from '@/utils.js'
import DotGrid from '@/components/DotGrid.vue'
import Galaxy from '@/components/Galaxy.vue'
import Plasma from '@/components/Plasma.vue'
import github from '@/assets/icons/socials-github.svg'
import dribbble from '@/assets/icons/socials-dribbble.svg'
import { redirect } from '@/utils.js'

onMounted(() => {
    const words = document.getElementsByClassName("word");
    const wordArray = [];
    let currentWord = 0;

    words[currentWord].style.opacity = 1;

    for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        const cw = wordArray[currentWord];
        const nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];

        for (let i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (let i = 0; i < nw.length; i++) {
            nw[i].className = "letter behind";
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function () {
            cw[i].className = "letter out";
        }, i * 45);
    }

    function animateLetterIn(nw, i) {
        setTimeout(() => {
            nw[i].className = "letter in";
        }, 340 + i * 45);
    }

    function splitLetters(word) {
        const content = word.innerHTML;
        word.innerHTML = "";
        const letters = [];

        for (let i = 0; i < content.length; i++) {
            const letter = document.createElement("span");
            letter.className = "letter";
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 3500);

})

</script>

<style lang="scss">

@font-face {
  font-family: 'SkiwarRegular';
  src: url('@/assets/fonts/SkiwarRegular-woOan.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

main {
    min-height: 96vh;
    padding: 2.31rem 7.38rem;
    position: relative;
    padding-top: 30vh;
    overflow: hidden;

    @media screen and (max-width: 1028px) {
        padding: 1rem 2.31rem;
        padding-top: 30vh;
    }

    .plasma-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        // z-index: -1;
    }

    h2 {
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 3.2rem;
        margin-bottom: .2rem;
        text-align: center;
        user-select: none;
        color: white;
        opacity: 1;

        @media screen and (max-width: 1028px) {
            font-size: 1rem;
        }
    }

    h1 {
        color: #ffffff;
        font-size: 5rem;
        line-height: 180%;
        font-style: normal;
        font-weight: 100;
        text-transform: uppercase;
        position: relative;
        user-select: none;
        font-optical-sizing: auto;
        font-family: "SkiwarRegular", sans-serif;
        text-shadow: 0px 0px 6px #ffffff49, 0px 0px 16px #c7134918;
        z-index: 1;

        @media screen and (max-width: 1028px) {
            font-size: 2.4rem;
        }

        @media screen and (max-width: 400px) {
            font-size: 2.4rem;
        }

        .word {
            text-rendering: optimizeLegibility!important;
            white-space: pre;
            left: 50%;
            transform: translate(-50%, -10%);
            opacity: 0;
            display: block;
            top: 0;
            position: absolute;

            .letter {
                background: linear-gradient(0deg, #e0e0e0, #ffffff, #e0e0e0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
        }

        @media screen and (max-width: 1028px) {
            br {
                display: none;
            }
        }
    }

     .actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;

        @media screen and (max-width: 1028px) {
            flex-direction: column;
            top: 45%;
        }
    }

    .contact {
        position: absolute;
        bottom: 50%;
        right: -1.4rem;
        transform: translateY(-50%) rotate(90deg);
        font-size: 1rem;
        color: #CFCFCF;
        font-weight: 400;
        cursor: pointer;
        user-select: none;
        transition: .2s;

        &:hover {
            color: #ffffff;
        }

        @media screen and (max-width: 1028px) {
            display: none;
        }
    }

    .socials {
        position: absolute;
        display: flex;
        gap: .6rem;
        left: 50%;
        bottom: 1.4rem;
        transform: translateX(-50%);

        a {
            cursor: pointer;

            &:hover {
                transform: scale(1.08);
            }
        }
    }
}

.letter {
  text-rendering: optimizeLegibility !important;
  display: inline-block;
  position: relative;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.20s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.24s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#space-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    display: block;
}


</style>