<template>
    <div>
        <v-text-field v-model="search" label="Поиск по адресу" v-if="tokens.length"/>
        <v-data-table
            :loading="loading"
            :headers="headers"
            :items="tokens"
            :items-per-page="10"
            class="elevation-1"
            :search="search"
        >
            <template #no-data>Нет данных</template>
        </v-data-table>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {useTokenStore} from "@/store/tokenStore";
import {Token} from "@/models/entites/Token";

@Component({})
export default class TokenTable extends Vue {
    tokenStore = useTokenStore();
    loading = true;
    search = '';
    headers = [
        {text: 'Адрес', value: 'address'},
        {text: 'Round', value: 'round'},
        {text: 'Распределение', value: 'allocation'},
        {text: 'Заблокировано', value: 'blocked'},
        {text: 'Разблокировано', value: 'unlocked'},
        {text: 'Время разблокировки', value: 'timeToUnlock'},
    ]

    get tokens(): Token[] {
        return this.tokenStore.tokens
    }

    async loadTokens() {
        this.loading = true;
        try {
            await this.tokenStore.getTokens();
        } catch (e) {

        } finally {
            this.loading = false
        }
    }

    mounted() {
        this.loadTokens()
    }
}
</script>

<style lang="scss" scoped>

</style>
