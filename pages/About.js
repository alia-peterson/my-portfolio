import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.title}>About</h2>
      </main>

      <Footer />
    </div>
  )
}
