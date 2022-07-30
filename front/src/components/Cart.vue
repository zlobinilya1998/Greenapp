<template>
    <div v-if="cart.length">
        <div v-for="product in cart" :key="product.id">{{ product }}</div>
    </div>
    <div v-else>
        <p v-html="$l.phrase('EmptyCart')"/>
        <p>Перейдите в
            <router-link :to="{name: 'catalog'}">каталог</router-link>
            для поиска лучших товаров!
        </p>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
import {useCatalogStore} from "@/store/catalog";
import {TProduct} from "@/models/entites/Product";

@Component({})
export default class Cart extends Vue {
    catalog = useCatalogStore();

    get cart(): TProduct[] {
        return this.catalog.cart;
    }
}
</script>

<style lang="scss">

</style>
