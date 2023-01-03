import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cards from '../src/components/Cards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Travcorp Poland Interview Task - Homepage</title>
      </Head>
      <main className={styles.main}>
          <Cards/>
      </main>
    </>
  )
}
