<template lang="pug">

header
    h3.title Mateus Felipe
    nav
        RouterLink( to="/" class="active" ) home
        a( v-for="item, index in navItems" :href="item.to" :key="'routerItem' + index" ) {{ item.text }}

</template>

<script setup>

import { computed } from 'vue'

const navItems = [
    { text: 'relevant projects', to: '#relevant-projects' },
    { text: 'about me', to: '#about' },
    { text: 'what I offer', to: '#offer' },
    { text: 'contact', to: '#contact' },
]

</script>

<style lang="scss" scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.31rem 7.38rem;
  width: 100vw;
  border-bottom: 1px solid #4F4F4F;

  h3 {
    color: #FFF;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

      &.active {
        font-weight: 600;
        color: white;
      }

      &:hover {
        color: white;
      }
    }
  }
}

</style>