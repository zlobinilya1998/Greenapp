import {useAppStore} from "@/store/appstore";

const appStore = useAppStore()

export const getLocalePrice = (price: number) => {
    const options = {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
    }
    return price.toLocaleString(appStore.locale, options)
}
export const getDiscountPercent = (newPrice: number, oldPrice: number) => {
    const percent = (oldPrice - newPrice) / oldPrice
    return percent.toLocaleString(appStore.locale, {style: 'percent'})
}
