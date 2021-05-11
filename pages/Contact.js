import body from '../styles/Home.module.scss'
import styles from '../styles/Contact.module.scss'

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
          link='/Alia Peterson Resume 2021.pdf'
          img='moon'
          height={150}
          width={150}
          name='Resume'
          />

      </div>
    </main>
  )
}
