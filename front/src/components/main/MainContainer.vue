<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";
import {AuthService} from "@/services/AuthService";

@Component({})
export default class MainContainer extends Vue {
    appStore = useAppStore();
    async mounted() {
        const isTokenValid = await AuthService.checkToken();
        if (isTokenValid) {
            await this.appStore.getUserDetails()
            await this.$router.push({name: 'dashboard'})
        } else {
            await this.$router.push({name: 'login'})
        }
    }
}
</script>

<style lang="scss">

</style>
