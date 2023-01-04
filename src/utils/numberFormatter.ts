export const formatNumber = (amount: number) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR'
}).format(amount);