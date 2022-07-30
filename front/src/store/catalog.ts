import {defineStore} from 'pinia'
import {TProduct} from "@/models/entites/Product";

interface State {
    products: TProduct[],
    cart: TProduct[],
}

export const useCatalogStore = defineStore('catalog', {
    state: (): State => ({
        products: [
            {
                name: 'Наручные часы GUESS',
                oldPrice: 12500,
                newPrice: 7945,
                img: 'https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6100650920.jpg',
                liked: false,
                id: 1,
            },
            {
                name: 'VALTERA Серьги',
                oldPrice: 40000,
                newPrice: 13990,
                img: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6221806347.jpg',
                liked: false,
                id: 2,
            },
            {
                name: 'VALTERA Серьги',
                oldPrice: 40000,
                newPrice: 13990,
                img: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6221806347.jpg',
                liked: false,
                id: 3,
            },
            {
                name: 'Стационарный миксер Kitfort КТ-1338, 1000 Вт',
                oldPrice: 11990,
                newPrice: 7990,
                img: 'https://cdn1.ozone.ru/s3/multimedia-r/wc1200/6016901451.jpg',
                liked: false,
                id: 4,
            },
            {
                name: 'Смартфон Poco X4 GT 8/256 ГБ, серебристый',
                oldPrice: 35980,
                newPrice: 32609,
                img: 'https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6372932305.jpg',
                liked: false,
                id: 5,
            },
            {
                name: 'Компьютерный стол, Письменный стол Beneli Алекс, 100х50х76 см',
                oldPrice: 5482,
                newPrice: 3290,
                img: 'https://cdn1.ozone.ru/s3/multimedia-m/wc1200/6230839258.jpg',
                liked: false,
                id: 6,
            },
        ],
        cart: [],
    }),
    actions: {
        addToCart(productId: number) {
            const product = this.products.find(item => item.id === productId);
            if (!product) throw new Error('Product not found');

            const cartProduct = this.cart.find(item => item.id === product.id);
            if (cartProduct) return cartProduct.qty += 1;

            this.cart.push({...product,qty: 1});
        },
        removeFromCart(productId: number) {
             this.cart = this.cart.filter(item => item.id !== productId);
        }
    },
    getters: {
        isItemInCart: (state) => (productId: number): TProduct | undefined => state.cart.find(item => item.id === productId),
        productsInCart: (state) => state.cart.reduce((acc,curValue) => acc + curValue.qty,0)
    }
})

