import {defineStore} from 'pinia'
import {TProduct} from "@/models/entites/Product";

interface State {
    products: TProduct[]
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
                name: 'VALTERA Серьги',
                oldPrice: 40000,
                newPrice: 13990,
                img: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6221806347.jpg',
                liked: false,
                id: 4,
            },
            {
                name: 'VALTERA Серьги',
                oldPrice: 40000,
                newPrice: 13990,
                img: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6221806347.jpg',
                liked: false,
                id: 5,
            },
            {
                name: 'VALTERA Серьги',
                oldPrice: 40000,
                newPrice: 13990,
                img: 'https://cdn1.ozone.ru/s3/multimedia-f/wc1200/6221806347.jpg',
                liked: false,
                id: 6,
            },
        ],
    }),
})

