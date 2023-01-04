import React from 'react';
import Image from "next/image";
import styles from '../../styles/CardItem.module.css'
import { Cards } from '../../mocks/cardsMock';
import Rating from './Rating';

function Cards(card: Cards): JSX.Element {
    const price = card.promoPrice ? card.promoPrice : card.price;
    return (
        <li className={styles.card}>
            <Image alt="a" src={card.image} width={400} height={100} style={{
                maxWidth: '100%',
                height: 'auto',
                paddingBottom: '5px'
            }}/>
            <div className={styles.info}>
                <p>{card.countriesCount}, {card.days} Days</p>
                <h2>{card.title}</h2>
                <Rating rating={card.rating}/>
                <span>From €{price}</span>
                {card.promoPrice ? <s className={styles.price}>Price €{card.price}</s> : null}
            </div>
        </li>
    );
}

export default Cards;
