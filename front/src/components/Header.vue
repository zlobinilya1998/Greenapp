<template>
    <header class="header">
        <div class="container">
            <div class="header-inner">
                <router-link to="/">
                    <img src="../assets/logo.png" style="max-width: 240px;height: 45px" alt="logo">
                </router-link>
                <div class="header-title">Tokenomics</div>
                <div class="header-right">
                    <div class="header-wallet">Connect wallet</div>
                    <div class="header-language">EN</div>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Header extends Vue {
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    color: var(--color-green);
    background: var(--bg-secondary);
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    z-index: 5;
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-title {
    color: var(--color-white);
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
}
.header-right {
    display: flex;
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
}
</style>
