import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/', redirect: {name: 'app'}
    },
    {
        path: '/auth', name: 'auth', component: () => import('@/components/auth/AuthContainer.vue'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/components/auth/Auth.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/components/auth/Register.vue')
            }
        ]
    },
    {
        path: '/app', name: 'app', component: () => import('@/components/main/MainContainer.vue'),
        children: [
            {
                path: '/dashboard', name: 'dashboard', component: () => import('@/components/Dashboard.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
