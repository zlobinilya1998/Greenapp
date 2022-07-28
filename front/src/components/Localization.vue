<template></template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
import {Locales, localization, LocalizationKey, Phrase} from '@/localization'
import {useAppStore} from "@/store/appstore";

@Component
export default class Localization extends Vue {
    appStore = useAppStore();
    localization = localization;
    locales = Locales;

    get locale(): LocalizationKey {
        return this.appStore.locale;
    }

    localesList = Object.entries(this.locales).map(locale => locale[1])

    phrase(phrase: Phrase) {
        const currentPhrases = this.localization[this.locale]
        return currentPhrases[phrase]
    }

    mounted() {
        Vue.prototype.$l = this;
    };

}
</script>
