import styles from '../styles/Home.module.scss'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository }) {
  const techs = technologies.join(', ')

  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>Team Type: {type}</p>
      <p>Timeframe: {timeframe}</p>
      <p>Description: {description}</p>
      <p>Technologies Used: {techs}</p>
      <p><a href={deployed}>Live Website ☞</a></p>
      <p><a href={repository}>Repository ☞</a></p>
    </article>
  )
}
