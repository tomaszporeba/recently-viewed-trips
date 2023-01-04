import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cards from '../src/components/Cards';
import { Cards as CardsInterface } from '../mocks/cardsMock';
import { GetStaticProps } from 'next';

interface Props {
    cards: CardsInterface[];
}

export default function Home({cards}: Props) {
    return (
        <>
            <Head>
                <title>Travcorp Poland Interview Task - Homepage</title>
            </Head>
            <main className={styles.main}>
                <Cards cards={cards}/>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/cards')
    const cards = await response.json();
    return {
        props: {
            cards
        },
    }
}
