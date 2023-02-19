import {defineStore} from "pinia";
import {TProduct} from "@/models/entites/Product";
import {ProductService} from "@/services/ProductService";

interface State {
    products: TProduct[];
    cart: TProduct[];
}

export const useCatalogStore = defineStore("catalog", {
    state: (): State => ({
        products: [],
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    }),
    actions: {
        async getProducts(){
            this.products = await ProductService.getAll();
        },
        addToCart(productId: number) {
            const product = this.products.find((item) => item.id === productId);
            if (!product) throw new Error("Product not found");

            const cartProduct = this.cart.find((item) => item.id === product.id);
            if (cartProduct) return (cartProduct.qty += 1);

            this.cart.push({ ...product, qty: 1 });
        },
        removeFromCart(productId: number) {
            this.cart = this.cart.filter((item) => item.id !== productId);
        },
    },
    getters: {
        isItemInCart:
            (state) =>
            (productId: number): TProduct | undefined =>
                state.cart.find((item) => item.id === productId),
        productsInCart: (state) => state.cart.reduce((acc, curValue) => acc + curValue.qty, 0),
    },
});
