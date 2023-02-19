import VueRouter, {RouteConfig} from 'vue-router'
import authRoutes from "@/router/authRoutes";

const routes: Array<RouteConfig> = [
    {
        path: '/', redirect: {name: 'app'}
    },
    {
        path: '/app', name: 'app', component: () => import('@/components/main/MainContainer.vue'),
        children: [
            {
                path: 'catalog',
                component: () => import('@/components/catalog/Catalog.vue'),
                children: [
                    {
                        name: 'catalog',
                        path: '',
                        component: () => import('@/components/catalog/Highlights.vue'),
                        meta: {
                            title: 'Каталог',
                        }
                    },
                    {
                        path: 'cart',
                        name: 'cart',
                        component: () => import('@/components/cart/Cart.vue'),
                        meta: {
                            title: 'Корзина',
                        }
                    },
                ],
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('@/components/profile/Profile.vue'),
                children: [],
            },
            {
                path: '/dashboard', name: 'dashboard', component: () => import('@/components/Dashboard.vue'),
                meta: {
                    requiredAuth: true,
                },
            },
            {
                path: '/admin', name: 'admin', component: () => import('@/components/admin/AdminScreen.vue'),
                meta: {
                    requiredAuth: true,
                },
            },
        ]
    },
    authRoutes,
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    next()
})


export default router
