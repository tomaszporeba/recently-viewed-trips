import React from 'react';
import Image from "next/image";
import styles from '../../styles/CardItem.module.css'
import { Cards } from '../../mocks/cardsMock';

function Cards(card: Cards): JSX.Element {
    return (
        <div className={styles.card}>
            <Image alt="a" src={card.image}width={300} height={100} style={{
                maxWidth: '100%',
                height: 'auto',
            }}/>
            <p>{card.title}</p>
        </div>
    );
}

export default Cards;
