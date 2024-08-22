<template lang="pug">

header.scrolling-down
    .logo
      img( @click="redirect('/')" :src="Logo" )
    Hamburger( @toggle-menu="toggleMenu" :opened="menuOpened" )

    nav( :class="{ opened: menuOpened }" )
        a( v-for="item, index in navItems" @click="scrollTo(item.to)" :key="'routerItem' + index" :class="{ active: item.active }"  ) {{ item.text }}
        a( @click="redirect('mailto:felipe.colla.m@gmail.com', '_blank')" ) contact

</template>

<script setup>

import { ref } from 'vue'
import Hamburger from './Hamburger.vue';
import Logo from '@/assets/logo.svg'
import { redirect, scrollTo } from '@/utils.js'

const navItems = [
    { text: 'home', to: 'main', active: true },
    { text: 'relevant projects', to: '#relevant-projects' },
    { text: 'about me', to: '#about' },
    { text: 'what I offer', to: '#what-i-offer' },
]

const menuOpened = ref(null);

const toggleMenu = () => {
  menuOpened.value = !menuOpened.value
}

</script>

<style lang="scss" scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.31rem 7.38rem;
  width: 100vw;
  border-bottom: 1px solid #4F4F4F;
  background: #111111c1;
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 999;

  .scrolling-down {
    top: 2rem;
  }

  .menu {
    display: none;
  }

  @media screen and (max-width: 1028px) {
    padding: 0 2.31rem;
    height: 6rem;

    .menu {
      display: flex;
    }
  }

  h3 {
    color: #FFF;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;
  }

  nav {
    align-items: center;
    display: flex;
    gap: 2.44rem;

    a {
      cursor: pointer;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #e0e0e0;
      user-select: none;

      &.active {
        font-weight: 600;
        color: #ffffff;
      }

      &:hover {
        color: #ffffff;
      }
    }

    @media screen and (max-width: 1028px) {
      opacity: 0;
      flex-direction: column;
      position: absolute;
      border-top: 2px solid #4F4F4F;
      height: calc(100vh - 6rem);
      padding: 2.31rem;
      top: 6rem;
      left: 0;
      width: 100vw;
      background: #0f0f0fd3;
      text-align: right;
      z-index: 999;
      pointer-events: none;

      a {
        transform: translateX(100vw);
        transition-delay: .1s;
        width: 100%;
      }

      &.opened {
        opacity: 1;
        pointer-events: unset;
        left: 0;

        a {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>