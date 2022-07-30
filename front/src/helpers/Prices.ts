export const getLocalePrice = (price: number) => {
    const options = {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
    }
    return price.toLocaleString('ru', options)
}
export const getDiscountPercent = (newPrice: number, oldPrice: number) => {
    const percent = (oldPrice - newPrice) / oldPrice
    return percent.toLocaleString('ru', {style: 'percent'})
}
