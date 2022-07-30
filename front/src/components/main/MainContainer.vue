<template>
    <div style="display: flex">
        <sidebar/>
        <router-view/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";
import {AuthService} from "@/services/AuthService";
import Sidebar from "@/components/main/Sidebar.vue";

@Component({
    components: {Sidebar}
})
export default class MainContainer extends Vue {
    appStore = useAppStore();

    async mounted() {
        const isTokenValid = await AuthService.checkToken();
        if (isTokenValid) {
            await this.appStore.getUserDetails()
        } else {
            await this.$router.push({name: 'login'})
        }
    }
}
</script>

<style lang="scss">

</style>
