import Image from 'next/image'
import { useThemeContext } from '../context/theme-context'
import info from '../data/information'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const { active } = useThemeContext()
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

        <article className={`${styles.card} ${active ? 'dark' : ''}`}>
          <h2>Summary:</h2>
          <p>{info.summary[0]}</p>
          <p>{info.summary[1]}</p>
        </article>

        <article className={`${styles.card} ${active ? 'dark' : ''}`}>
          <div>
            <Image src={'/images/leaves.png'} height={100} width={120} />
          </div>

          <h2>Currently Learning:</h2>
          <ul>{currents}</ul>
          <h2>Proficient In:</h2>
          <ul>{profs}</ul>
        </article>

      </section>
    </main>
  )
}
