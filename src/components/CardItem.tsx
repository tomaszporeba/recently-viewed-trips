import React from 'react';
import Image from "next/image";
import styles from '../../styles/CardItem.module.css'
import { Cards } from '../../mocks/cardsMock';
import Rating from './Rating';
import { formatNumber } from '../utils/numberFormatter';

function Cards(card: Cards): JSX.Element {
    const price = card.promoPrice ? card.promoPrice : card.price;
    const info = () => {
        const countriesText = card.countriesCount > 1 ? 'Countries' : 'Country';
        const daysText = card.days > 1 ? 'Days' : 'Day';
        return `${card.countriesCount} ${countriesText}, ${card.days} ${daysText}`
    }
    return (
        <li className={styles.card}>
            <Image alt="a" src={card.image} width={400} height={100} style={{
                maxWidth: '100%',
                height: 'auto',
                paddingBottom: '5px'
            }}/>
            <div className={styles.info}>
                <p>{info()}</p>
                <h2>{card.title}</h2>
                <Rating rating={card.rating}/>
                <span>From {formatNumber(price)}</span>
                {card.promoPrice ? <s className={styles.price}>Price {formatNumber(card.price)}</s> : null}
            </div>
        </li>
    );
}

export default Cards;
