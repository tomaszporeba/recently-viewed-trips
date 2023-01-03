import React from 'react';
import styles from '../../styles/Cards.module.css'

function Cards(): JSX.Element {
    return (
        <div className={styles.grid}>
            <a className={styles.card}><h2>First card</h2></a>
            <a className={styles.card}><h2>Second card</h2></a>
            <a className={styles.card}><h2>Third card</h2></a>
        </div>
    );
}

export default Cards;
