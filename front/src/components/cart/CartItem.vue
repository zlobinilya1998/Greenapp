<template>
    <v-layout class="cart-item">
        <v-flex shrink class="item-img">
            <v-img  :src="item.img" max-height="120" max-width="92"/>
        </v-flex>
        <v-layout column>
            <p v-html="item.title" style="flex: 1"/>
            <div>
                <v-btn text v-html="'В избранное'"/>
                <v-btn text v-html="'Удалить'" @click="removeItem"/>
            </div>
        </v-layout>
        <v-flex>
            <div class="item-prices">
                <div class="item-new-price" v-html="newPriceWithQty"/>
                <v-layout>
                    <div class="item-old-price" v-html="oldPriceWithQty"/>
                    <div class="item-discount" v-html="`Скидка ${discount}`"/>
                </v-layout>
            </div>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {TProduct} from "@/models/entites/Product";
import {getLocalePrice} from "@/helpers/Prices";
import {useCatalogStore} from "@/store/catalog";

@Component({})
export default class CartItem extends Vue {
    @Prop({required: true}) item: TProduct;

    catalogStore = useCatalogStore();

    get oldPriceWithQty() {
        const price = this.item.oldPrice * this.item.qty;
        return getLocalePrice(price)
    }

    get newPriceWithQty() {
        const price = this.item.price * this.item.qty;
        return getLocalePrice(price)
    }

    get discount() {
        const oldPrice = this.item.oldPrice * this.item.qty;
        const newPrice = this.item.price * this.item.qty;
        return getLocalePrice(oldPrice - newPrice);
    }

    removeItem() {
        this.catalogStore.removeFromCart(this.item.id);
    }
}
</script>

<style lang="scss" scoped>
.cart-item {
    display: flex;

    .item-img {
        margin-right: 15px;
    }

    .item-content {

    }

    .item-new-price {
        color: var(--color-green);
    }

    .item-old-price {
        color: var(--color-muted);
        font-size: 0.85rem;
        margin-right: 10px;
        text-decoration: line-through;
    }

    .item-discount {
        color: red;
        font-size: 0.85rem;
    }
}
</style>
