<template>
    <div class="catalog-product">
        <div class="product-inner">
            <v-img :src="item.img" max-height="250" max-width="250" class="product-img">
                <div class="product-discount" v-html="`—${discountPercent()}`"/>
            </v-img>
            <p class="product-old-price" v-html="localeOldPrice()"/>
            <p class="product-new-price" v-html="localeNewPrice()"/>
            <p class="product-name" v-html="item.name"/>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {TProduct} from "@/models/entites/Product";
import {getDiscountPercent, getLocalePrice } from "@/helpers/Prices";

@Component({})
export default class Product extends Vue {
    @Prop({required: true}) item: TProduct;


    discountPercent() {
        return getDiscountPercent(this.item.newPrice,this.item.oldPrice)
    }

    localeNewPrice() {
        return getLocalePrice(this.item.newPrice)
    }
    localeOldPrice() {
        return getLocalePrice(this.item.oldPrice)
    }
}
</script>

<style lang="scss" scoped>

.catalog-product {
    padding: 10px;

    .product-inner {
        display: flex;
        flex-direction: column;
        background: white;
        color: var(--color-muted);
    }

    .product-old-price {
        margin-bottom: 5px;
        padding: 10px;
        position: relative;
        max-width: fit-content;
        &:before {
            content: "";
            border-bottom: 1px solid red;
            position: absolute;
            width: 70%;
            height: 50%;
            top: 0;
            transform: rotate(-6deg);
        }
    }

    .product-new-price {
        background: #10c44c;
        padding: 10px;
        color: var(--color-white);
        flex: 0 1 auto;
        font-weight: 500;
    }

    .product-name {
        padding: 0 10px;
    }

    .product-img {
        position: relative;
    }

    .product-discount {
        position: absolute;
        bottom: 0;
        background: red;
        padding: 5px;
        max-width: fit-content;
        border-radius: 0 15% 15% 0;
        font-size: .8rem;
    }
}
</style>
