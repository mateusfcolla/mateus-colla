import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import VueSplide from '@splidejs/vue-splide'

createApp(App).use(router).use(VueSplide).mount('body')