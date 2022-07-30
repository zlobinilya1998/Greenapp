<template>
    <div class="catalog-product">
        <div class="product-inner">
            <v-img :src="item.img" contain max-height="250" max-width="250" class="product-img">
                <div class="product-discount" v-html="`—${discountPercent}`"/>
            </v-img>
            <p class="product-old-price" v-html="localeOldPrice"/>
            <p class="product-new-price" v-html="localeNewPrice"/>
            <p class="product-name" v-html="item.name"/>
            <div class="product-actions">
                <v-slide-x-transition mode="out-in">
                    <div v-if="isItemOnCart">
                        <v-btn class="change-qty" @click="removeQty">
                            <v-icon v-html="'mdi-minus'"/>
                        </v-btn>
                        {{ isItemOnCart.qty }} шт.
                        <v-btn class="change-qty" @click="addQty">
                            <v-icon v-html="'mdi-plus'"/>
                        </v-btn>
                    </div>
                    <v-btn v-else max-width="110" v-html="$l.phrase('Purchase')" @click="addToCart"/>
                </v-slide-x-transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {TProduct} from "@/models/entites/Product";
import {getDiscountPercent, getLocalePrice} from "@/helpers/Prices";
import {useCatalogStore} from "@/store/catalog";

@Component({})
export default class Product extends Vue {
    @Prop({required: true}) item: TProduct;

    catalogStore = useCatalogStore();

    addToCart() {
        this.catalogStore.addToCart(this.item.id)
    }

    get isItemOnCart() {
        return this.catalogStore.isItemInCart(this.item.id)
    }

    addQty() {
        this.isItemOnCart.qty += 1;
    }

    removeQty() {
        if (this.isItemOnCart.qty === 1) {
            this.catalogStore.cart = this.catalogStore.cart.filter(product => product.id !== this.item.id);
            return;
        }
        this.isItemOnCart.qty -= 1;
    }

    get discountPercent() {
        return getDiscountPercent(this.item.newPrice, this.item.oldPrice)
    }

    get localeNewPrice() {
        return getLocalePrice(this.item.newPrice)
    }

    get localeOldPrice() {
        return getLocalePrice(this.item.oldPrice)
    }
}
</script>

<style lang="scss" scoped>

.catalog-product {
    padding: 10px;
    display: flex;

    .product-inner {
        display: flex;
        flex-direction: column;
        background: white;
        color: var(--color-muted);
        border-radius: 10px;
        overflow: hidden;
        flex: 1;
    }

    .product-old-price {
        margin-bottom: unset;
        padding: 10px;
        position: relative;
        max-width: fit-content;
        font-size: 0.9rem;

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
        margin-bottom: 5px;
    }

    .product-name {
        padding: 0 10px;
    }

    .product-img {
        position: relative;
        margin-top: 10px;
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

    .product-actions {
        margin: auto 10px 10px;

        .change-qty {
            min-width: unset;
            padding: 0 10px;
        }
    }
}
</style>
