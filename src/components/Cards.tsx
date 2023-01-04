import React from 'react';
import styles from '../../styles/Cards.module.css'
import { Cards } from '../../mocks/cardsMock';
import CardItem from './CardItem';

function Cards({ cards }: { cards: Cards[]}): JSX.Element {
    return (
        <ul className={styles.grid}>
            { cards.map((card) => <CardItem key={card.id} {...card}/>)}
        </ul>
    );
}

export default Cards;
