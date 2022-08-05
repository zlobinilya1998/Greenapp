<template>
    <v-app-bar class="header">
        <div class="header-inner">
            <router-link :to="{ name: 'dashboard' }">
                <img src="../assets/logo.png" style="max-width: 240px; height: 45px" alt="logo" />
            </router-link>
            <div>
                <div class="header-right" v-if="isLoggedIn">
                    <locale-select />
                    <v-btn @click="logout">Выход</v-btn>
                </div>
            </div>
        </div>
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { useAppStore } from "@/store/appstore";
import { AuthService } from "@/services/AuthService";
import { Locales, LocalizationKey } from "@/localization";
import LocaleSelect from "@/components/shared/LocaleSelect.vue";

@Component({
    components: { LocaleSelect },
})
export default class Header extends Vue {
    appStore = useAppStore();

    get user() {
        return this.appStore.user;
    }

    get isLoggedIn() {
        return this.appStore.isLoggedIn;
    }

    logout() {
        this.appStore.logout();
        this.$router.push({ name: "login" });
    }
}
</script>

<style lang="scss" scoped>
.header {
    color: var(--color-green);
    background: var(--bg-secondary) !important;
    flex: 0 1 auto;
    .locale-select {
        margin: 0 10px;
    }
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
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
