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
            <Image src='/images/moons.png' height={15} width={70} />
            <Image src='/images/hat.png' height={150} width={150} />
            <p>GitHub</p>
            <Image src='/images/moons.png' height={15} width={70} />
          </article>
        </a>

        <a href='https://www.linkedin.com/in/alia-peterson/' target='_blank'>
          <article className={styles.tarot}>
            <Image src='/images/moons.png' height={15} width={70} />
            <Image src='/images/plant bottle.png' height={200} width={150} />
            <p>LinkedIn</p>
            <Image src='/images/moons.png' height={15} width={70} />
          </article>
        </a>

        <a href='mailto:alia@alia.codes' target='_blank'>
          <article className={styles.tarot}>
            <Image src='/images/moons.png' height={15} width={70} />
            <Image src='/images/moon.png' height={150} width={150} />
            <p>Email</p>
            <Image src='/images/moons.png' height={15} width={70} />
          </article>
        </a>

      </div>
    </main>
  )
}
