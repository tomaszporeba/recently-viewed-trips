export interface Cards {
    id: number;
    title: string;
    rating: string;
    price: string;
    promoPrice: string;
    countriesCount: number;
    days: number;
    image: string;
}

export const cards: Cards[] = [{
    id: 1,
    title: 'European Quest',
    rating: '4.6',
    promoPrice: '2.877',
    price: '3.385',
    countriesCount: 11,
    days: 25,
    image: '/EuropeanQuest.png'
},{
    id: 2,
    title: 'Simply Italy',
    rating: '4.4',
    promoPrice: '1.832',
    price: '2.155',
    countriesCount: 2,
    days: 15,
    image: '/SimplyItaly.png'
},{
    id: 3,
    title: 'Italian Espresso',
    rating: '4.5',
    promoPrice: '1.245',
    price: '1.465',
    countriesCount: 1,
    days: 10,
    image: '/ItalianEspresso.png'
}]