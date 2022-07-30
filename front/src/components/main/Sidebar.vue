<template>
    <v-card>
        <v-navigation-drawer permanent expand-on-hover>
            <v-list v-if="user">
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{ `${user.firstName} ${user.lastName}` }}
                        </v-list-item-title>
                        <v-list-item-subtitle v-html="user.email"/>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider/>
            <v-list nav dense>
                <router-link :to="{name: item.path}" link v-for="item in navs" :key="item.name">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon v-html="item.icon"/>
                        </v-list-item-icon>
                        <v-list-item-title v-html="item.name"/>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";
import {TUser} from "@/models/entites/User";


export type NavLink = {
    name: string,
    icon: string,
    path: string,
}


@Component({})
export default class Sidebar extends Vue {
    navs: NavLink[] = [
        {
            name: 'Профиль',
            icon: 'mdi-account',
            path: 'dashboard',
        },
        {
            name: 'Каталог',
            icon: 'mdi-shopping',
            path: 'catalog',
        },
        {
            name: 'Корзина',
            icon: 'mdi-cart',
            path: 'cart',
        },
    ]
    appStore = useAppStore()
    get user(): TUser {
        return this.appStore.user;
    }
}
</script>
