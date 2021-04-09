import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>Contact</main>

      <Footer />
    </div>
  )
}
