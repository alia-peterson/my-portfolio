import styles from '../styles/Project.module.scss'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository }) {
  const techs = technologies.join(', ')

  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p><span>Team Type:</span> {type}</p>
      <p><span>Timeframe:</span> {timeframe}</p>
      <p><span>Description:</span> {description}</p>
      <p><span>Technologies Used:</span> {techs}</p>
      {deployed && <p><a href={deployed}>Live Website ☞</a></p>}
      {repository && <p><a href={repository}>Repository ☞</a></p>}
    </article>
  )
}
