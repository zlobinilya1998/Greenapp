<template>
    <v-select
        class="locale-select"
        :style="{maxWidth: '50px'}"
        :items="locales"
        item-text="text"
        item-value="value"
        single-line
        v-model="locale"
    />
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
import {LocalizationKey} from "@/localization";
import {useAppStore} from "@/store/appstore";

@Component
export default class LocaleSelect extends Vue {
    appStore = useAppStore();

    get locale() {
        return this.appStore.locale
    }

    set locale(val: LocalizationKey) {
        this.appStore.locale = val;
        localStorage.setItem('locale',val)
    }

    get locales() {
        return this.$l.localesList;
    }
}
</script>

<style lang="scss">
.locale-select {
    .v-input__slot {
        margin-bottom: unset;
    }
    .v-text-field__details {
        display: none;
    }
}
</style>
