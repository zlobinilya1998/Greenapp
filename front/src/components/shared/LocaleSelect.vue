<template>
    <v-select
        :style="{maxWidth: '50px'}"
        :items="locales"
        item-text="text"
        item-value="value"
        v-model="locale"
    ></v-select>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
import {LocalizationKey} from "@/localization";
import {useAppStore} from "@/store/appstore";

@Component({})
export default class LocaleSelect extends Vue {
    appStore = useAppStore();

    get locale() {
        return this.appStore.locale
    }

    @Watch('locale')
    changeUserLocale(val: LocalizationKey) {
        this.appStore.changeLocale(val);
    }

    set locale(val: LocalizationKey) {
        this.appStore.locale = val;
    }

    get locales() {
        return this.$l.localesList;
    }
}
</script>

<style lang="scss">

</style>
