import projects from '../data/projects'

import body from '../styles/Home.module.scss'
import styles from '../styles/Project.module.scss'

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
        image={project.image}
      />
    )
  })

  return (
    <main className={body.main}>
      <section className={styles.container}>
        {projectCards}
      </section>
    </main>
  )
}
