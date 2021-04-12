import Head from 'next/head'

import info from '../data/information'
import styles from '../styles/Home.module.scss'

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
    <main className={styles.main}>
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
  )
}
