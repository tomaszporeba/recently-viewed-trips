import React from 'react';
import styles from '../../styles/CardItem.module.css'
import { Cards } from '../../mocks/cardsMock';

function Cards(card: Cards): JSX.Element {
    return (
        <div className={styles.grid}>
            {card.title}
        </div>
    );
}

export default Cards;
