export interface Cards {
    id: number;
    title: string;
    rating: number;
    price: string;
    promoPrice?: string;
    countriesCount: string;
    days: number;
    image: string;
}

export const cards: Cards[] = [{
    id: 1,
    title: 'European Quest',
    rating: 46,
    promoPrice: '2,877',
    price: '3,385',
    countriesCount: '11 Countries',
    days: 25,
    image: '/EuropeanQuest.jpeg'
},{
    id: 2,
    title: 'Simply Italy',
    rating: 44,
    promoPrice: '1,832',
    price: '2,155',
    countriesCount: '2 Countries',
    days: 15,
    image: '/SimplyItaly.jpeg'
},{
    id: 3,
    title: 'Italian Espresso',
    rating: 45,
    promoPrice: '1,245',
    price: '1,465',
    countriesCount: '1 Country',
    days: 10,
    image: '/ItalianEspresso.jpeg'
}]