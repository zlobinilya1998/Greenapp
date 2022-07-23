<template>
    <v-app-bar class="header">
        <div class="header-inner">
            <router-link to="/">
                <img src="../assets/logo.png" style="max-width: 240px;height: 45px" alt="logo">
            </router-link>
            <div class="header-title">Tokenomics</div>
            <div class="header-right">
                <div class="mr-2" v-if="user">{{ user.email }}</div>
                <div class="header-wallet">Connect wallet</div>
                <div class="header-language">EN</div>
            </div>
        </div>
    </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";

@Component({})
export default class Header extends Vue {
    appStore = useAppStore();

    get user() {
        return this.appStore.user;
    }
}
</script>

<style lang="scss" scoped>
.header {
    color: var(--color-green);
    background: var(--bg-secondary) !important;
    flex: 0 1 auto
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
}

.header-title {
    color: var(--color-white);
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
}

.header-right {
    display: flex;
    align-items: center;
}

.header-wallet {
    padding: 6px 12px;
    color: var(--color-white);
    background: var(--color-green);
    border-radius: var(--border-xs);
    cursor: pointer;
    margin-right: 20px;
}

.header-language {
    padding: 6px 15px;
    color: var(--color-green);
    border: 1px solid #313131;
    border-radius: var(--border-xs);
    cursor: pointer;
    margin-right: 20px;
}
</style>
