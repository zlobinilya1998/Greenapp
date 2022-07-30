<template>
  <div>
      <div class="highlight-products">
          <Product v-for="product in products" :item="product" :key="product.id"/>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {useCatalogStore} from "@/store/catalog";
import Product from "@/components/catalog/Product.vue";
import {TProduct} from "@/models/entites/Product";

@Component({
    components: {Product}
})
export default class Highlights extends Vue {
    catalogStore = useCatalogStore();


    get products(): TProduct[] {
        return this.catalogStore.products;
    }
}
</script>

<style lang="scss" scoped>
.highlight-products {
    margin: 0 -10px;
    display: flex;
    flex-wrap: wrap;
    .catalog-product {
        flex: 0 1 250px;
    }
}
</style>
