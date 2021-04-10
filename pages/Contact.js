import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.title}>Contact</h2>

        <div className={styles.wrapper}>
          <a href='https://github.com/alia-peterson' target='_blank'>
            <article className={styles.tarot}>
              <Image src='/images/hat.png' height={200} width={200} />
              <p>GitHub</p>
            </article>
          </a>

          <a href='https://www.linkedin.com/in/alia-peterson/' target='_blank'>
            <article className={styles.tarot}>
              <Image src='/images/plant bottle.png' height={280} width={200} />
              <p>LinkedIn</p>
            </article>
          </a>

          <a href='mailto:alia@pnwebs.com' target='_blank'>
            <article className={styles.tarot}>
              <Image src='/images/moon.png' height={200} width={200} />
              <p>Email</p>
            </article>
          </a>

        </div>
      </main>

      <Footer />
    </div>
  )
}
