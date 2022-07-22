<template>
    <div id="app">
        <Header/>
        <router-view class="container view"/>
        <Footer/>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from './components/Header.vue'
import Footer from "@/components/Footer.vue";

@Component({components: {Footer, Header}})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/normalize.css";
@import "./assets/style.css";
#app {
    min-height: 100vh;
    background: var(--bg-primary);
    padding-top: 100px;
}
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 21px;
}
.container.view {
    padding: 20px 20px 50px 20px;
    flex: 1;
}
</style>
