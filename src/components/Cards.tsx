import React from 'react';
import styles from '../../styles/Cards.module.css'
import { Cards } from '../../mocks/cardsMock';
import CardItem from './CardItem';

function Cards({ cards }: { cards: Cards[]}): JSX.Element {
    return (
        <div className={styles.grid}>
            { cards.map(CardItem)}
        </div>
    );
}

export default Cards;
