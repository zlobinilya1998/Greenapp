<template>
    <div>
        <h2>Корзина</h2>
        <div>
            <div v-for="product in cart" :key="product.id">{{product}}</div>
        </div>
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
