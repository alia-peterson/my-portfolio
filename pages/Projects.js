import projects from '../data/projects'
import styles from '../styles/Home.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Projects() {
  const projectCards = projects.map((project, i) => {
    return (
      <Card
        key={i}
        title={project.title}
        type={project.type}
        timeframe={project.timeframe}
        description={project.description}
        technologies={project.technologies}
        deployed={project.deployed}
        repository={project.repository}
      />
    )
  })

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.title}>Projects</h2>
        <section className={styles.grid}>
          {projectCards}
        </section>
      </main>

      <Footer />
    </div>
  )
}
