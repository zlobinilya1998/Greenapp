<template>
    <v-layout v-if="cart.length" column>
        <v-flex>
            <v-layout class="delivery-info">
                <v-flex grow>Доставка</v-flex>
                <v-layout justify-end>
                    <div class="mr-2">
                        <v-icon v-html="'mdi-car'"/>
                        Курьером
                    </div>
                    <div>
                        <v-icon v-html="'mdi-google-maps'"/>
                        Самовывоз
                    </div>
                </v-layout>
            </v-layout>
            <div class="cart-products">
                <cart-item v-for="product in cart" :item="product" :key="product.id"/>
            </div>
        </v-flex>
        <v-flex>
            <div class="cart-payment">
                <div>
                    <p>Доступные способы и время доставки можно выбрать при оформлении заказа</p>
                    <v-btn block color="primary" v-html="'Перейти к оформлению'" class="mb-4"/>
                </div>
                <v-divider/>
            </div>
        </v-flex>
    </v-layout>
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
import CartItem from "@/components/cart/CartItem.vue";

@Component({
    components: {CartItem}
})
export default class Cart extends Vue {
    catalog = useCatalogStore();

    get cart(): TProduct[] {
        return this.catalog.cart;
    }
}
</script>

<style lang="scss" scoped>
.delivery-info {
    background: var(--color-green);
    padding: 16px;
    margin-bottom: 20px;
}

.cart-products {
    .cart-item {
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
}
.cart-payment {
    margin-top: 15px;
    margin-left: auto;
    max-width: 400px;
}
</style>
