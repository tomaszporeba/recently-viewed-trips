import React from 'react';
import Image from "next/image";
import styles from '../../styles/CardItem.module.css'
import { Cards } from '../../mocks/cardsMock';

function Cards(card: Cards): JSX.Element {
    return (
        <div className={styles.card}>
            <Image alt="a" src={card.image} width={400} height={100} style={{
                maxWidth: '100%',
                height: 'auto',
            }}/>
            <div className={styles.info}>
                <p>{card.countriesCount} Countries, {card.days} Days</p>
                <h2>{card.title}</h2>
                <p>{card.rating}</p>
                <p>{card.promoPrice} {card.price}</p>
            </div>
        </div>
    );
}

export default Cards;
