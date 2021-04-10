import Head from 'next/head'

import info from '../data/information'
import styles from '../styles/Home.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const types = Object.keys(info.proficient)

  const currents = info.current.map((each, i) => {
    return (
      <li key={i}>{each}</li>
    )
  })

  const profs = types.map((type, i) => {
    return (
      <li key={i}>
        <span className={styles.span}>{type}</span>: {info.proficient[type]}
      </li>
    )
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Alia Peterson Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>About Me</h2>
        <section className={styles.section}>
          <article className={styles.card}>
            <h3>Summary:</h3>
            <p>{info.summary[0]}</p>
            <p>{info.summary[1]}</p>
          </article>
          <article className={styles.card}>
            <h3>Currently Learning:</h3>
            <ul>{currents}</ul>
            <h3>Proficient In:</h3>
            <ul>{profs}</ul>
          </article>
        </section>
      </main>
      <Footer />

    </div>
  )
}
