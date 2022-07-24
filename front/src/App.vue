<template>
    <v-app>
        <v-main>
            <Header/>
            <div class="app-container">
                <router-view/>
            </div>
            <Footer/>
        </v-main>
        <ReactiveState/>
        <Localization/>
    </v-app>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue"
import {Component, Vue} from "vue-property-decorator"
import ReactiveState from "@/components/ReactiveState.vue";
import Localization from "@/components/Localization.vue";

@Component({
    components: {
        Localization,
        ReactiveState,
        Footer, Header
    }
})
export default class App extends Vue {
}


</script>

<style lang="scss">
@import "./assets/normalize.css";
@import "./assets/style.css";

.v-main__wrap {
    display: flex;
    flex-direction: column;
}

.app-container {
    flex: 1;
    background: var(--bg-primary);
    padding: 20px;
}

.container {
    max-width: 1420px;
    margin: 0 auto;
    padding: 20px;
}
</style>
