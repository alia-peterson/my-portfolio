import projects from '../data/projects'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Projects() {
  const projectCards = projects.map((project, i) => {
    return (
      <Card key={i}/>
    )
  })

  console.log(projects)
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h2>Projects</h2>
        <section>
          {projectCards}
        </section>
      </main>

      <Footer />
    </div>
  )
}
