export default {
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
}
