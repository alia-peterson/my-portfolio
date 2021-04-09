import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Logo />
        <h1>Alia Peterson</h1>
        <Link href='/Projects'>
          <a>Projects</a>
        </Link>
      </header>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
