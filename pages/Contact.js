import Image from 'next/image'

import body from '../styles/Home.module.scss'
import styles from '../styles/Contact.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Tarot from '../components/Tarot'

export default function Contact() {
  return (
    <main className={body.main}>

      <div className={styles.container}>
        <Tarot
          link='https://github.com/alia-peterson'
          img='hat'
          height={150}
          width={150}
          name='Github'
          />

        <Tarot
          link='https://www.linkedin.com/in/alia-peterson/'
          img='plant bottle'
          height={200}
          width={150}
          name='LinkedIn'
          />

        <Tarot
          link='mailto:alia@alia.codes'
          img='moon'
          height={150}
          width={150}
          name='Email'
          />

      </div>
    </main>
  )
}
