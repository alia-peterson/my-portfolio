import projects from '../data/projects'
import Card from '../components/Card'

export default function Projects() {
  const projectCards = projects.map(project => {
    return (
      <Card />
    )
  })
  console.log(projects)
  return (
    <div>
      <h2>Projects</h2>
      <section>
        {projectCards}
      </section>
    </div>
  )
}
