import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alia Peterson Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h2 className={styles.intro}>Welcome to my website!</h2>
      </main>
      <Footer />

    </div>
  )
}
