import Image from 'next/image'

import body from '../styles/Home.module.scss'
import styles from '../styles/Contact.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <main className={body.main}>

      <div className={styles.container}>
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

        <a href='mailto:alia.codes@pnwebs.com' target='_blank'>
          <article className={styles.tarot}>
            <Image src='/images/moon.png' height={200} width={200} />
            <p>Email</p>
          </article>
        </a>

      </div>
    </main>
  )
}
