<template>
    <div style="flex: 1">
        <h2 v-html="$route.meta.title" class="mb-4" />
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { useCatalogStore } from "@/store/catalog";
import { TProduct } from "@/models/entites/Product";

@Component({})
export default class Catalog extends Vue {
    catalogStore = useCatalogStore();

    get cart() {
        return this.catalogStore.cart;
    }

    @Watch("cart", { deep: true })
    cartChange(val: TProduct[]) {
        localStorage.setItem("cart", JSON.stringify(val));
    }

    created(){
        this.catalogStore.getProducts();
    }
}
</script>
