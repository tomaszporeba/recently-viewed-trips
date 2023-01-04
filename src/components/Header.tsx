import React from 'react';
import styles from '../../styles/Header.module.css'

function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1>Recently viewed trips</h1>
        </header>
    );
}

export default Header;
