export interface Cards {
    id: number;
    title: string;
    rating: number;
    price: number;
    promoPrice?: number;
    countriesCount: number;
    days: number;
    image: string;
}

export const cards: Cards[] = [{
    id: 1,
    title: 'European Quest',
    rating: 46,
    promoPrice: 2877,
    price: 3385,
    countriesCount: 11,
    days: 25,
    image: '/EuropeanQuest.jpeg'
},{
    id: 2,
    title: 'Simply Italy',
    rating: 44,
    promoPrice: 1832,
    price: 2155,
    countriesCount: 2,
    days: 15,
    image: '/SimplyItaly.jpeg'
},{
    id: 3,
    title: 'Italian Espresso',
    rating: 45,
    promoPrice: 1245,
    price: 1465,
    countriesCount: 1,
    days: 10,
    image: '/ItalianEspresso.jpeg'
}]