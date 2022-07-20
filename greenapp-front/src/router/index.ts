import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {path: '/',redirect:'/dashboard'},
    {path: '/dashboard',name: 'dashboard',component: () => import('../components/Dashboard.vue')}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
