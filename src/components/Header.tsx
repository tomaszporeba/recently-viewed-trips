import React from 'react';
import styles from '../../styles/Header.module.css'

function Header(): JSX.Element {
    return (
        <header className={styles.bar}>
            <h1>Recently viewed trips</h1>
        </header>
    );
}

export default Header;
