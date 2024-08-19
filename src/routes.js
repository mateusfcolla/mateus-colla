import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/components/Pages/Home.vue'

const routes = [
    { path: '/', component: Home }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router