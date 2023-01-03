import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Travcorp Poland Interview Task</title>
        <meta name="description" content="Interview app for Travcorp Poland" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
            <a className={styles.card}><h2>First card</h2></a>
            <a className={styles.card}><h2>Second card</h2></a>
            <a className={styles.card}><h2>Third card</h2></a>
        </div>
      </main>
    </>
  )
}
