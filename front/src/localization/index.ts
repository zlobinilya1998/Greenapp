export const localization = {
    ru: {
        'Hello': 'Привет',
        'Purchase': 'В корзину',
        'ProductNotFound': 'Товар не найден',
        'EmptyCart': 'Корзина пуста',
    },
    en: {
        'Hello': 'Hello',
        'Purchase': 'Purchase',
        'ProductNotFound': 'Product not found',
        'EmptyCart': 'Cart is empty',
    },
}

export enum Locales {
    Ru = 'ru',
    En = 'en',
}


export type LocalizationKey = keyof typeof localization;
export type Phrase = keyof typeof localization[LocalizationKey];

const $l = (locale: Locales) => (phrase: Phrase) => localization[locale][phrase]

export default $l;
