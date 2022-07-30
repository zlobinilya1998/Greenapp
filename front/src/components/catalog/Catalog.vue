<template>
    <div>
        <h2>Каталог</h2>
        <router-view/>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
import {useCatalogStore} from "@/store/catalog";
import {TProduct} from "@/models/entites/Product";

@Component({})
export default class Catalog extends Vue {
    catalogStore = useCatalogStore();

    get cart() {
        return this.catalogStore.cart;
    }

    @Watch('cart', {deep: true})
    cartChange(val: TProduct[]) {
        localStorage.setItem('cart', JSON.stringify(val))
    }
    loadCartFromStorage() {
        const cart = localStorage.getItem('cart');
        if (!cart) return;
        this.catalogStore.cart = JSON.parse(cart);
    }

    mounted(){
        this.loadCartFromStorage();
    }
}
</script>
