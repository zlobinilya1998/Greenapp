<template>
    <div>
        <h2 v-html="currentPage"/>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";

@Component({})
export default class AuthContainer extends Vue {
    appStore = useAppStore();

    get currentPage() {
        return this.$route.path.includes('login') ? 'Вход' : 'Регистрация'
    }

    get isLoggedIn() {
        return this.appStore.isLoggedIn;
    }
    mounted(){
        if (this.isLoggedIn) this.$router.push({name: 'dashboard'})
    }
}
</script>

<style lang="scss">

</style>
