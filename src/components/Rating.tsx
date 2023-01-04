import React from 'react';
import styles from '../../styles/Rating.module.css'

function Rating({rating}: { rating: number }): JSX.Element {
    return (
        <div className={styles.ratingContainer}>
            <div className={styles.rating}>
                <div className={styles.ratingUpper} style={{width: `${(rating / 50) * 100}%`}}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
                <div className={styles.ratingLower}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
            <span>  {rating / 10}</span>
        </div>

    );
}

export default Rating;
