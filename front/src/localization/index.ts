export const localization = {
    ru: {
        'Hello': 'Привет',
    },
    en: {
        'Hello': 'Hello',
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
