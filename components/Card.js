import styles from '../styles/Project.module.scss'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository }) {
  const techs = technologies.join(', ')

  return (
    <article className={styles.card}>
      <div className={styles.inner}>

        <h3>{title}</h3>

        <div className={styles.front}>
          <div className={styles.links}>
            {deployed && <p><a href={deployed} target='_blank'>Live Website ☞</a></p>}
            {repository && <p><a href={repository} target='_blank'>Repository ☞</a></p>}
          </div>

          <div>
            <p><span>Team Type:</span> {type}</p>
            <p><span>Timeframe:</span> {timeframe}</p>
            <p><span>Technologies Used:</span></p>
            <p>{techs}</p>
          </div>

          <p className={styles.button} onClick={flipCard}>Description ☞</p>
        </div>

        <div className={styles.back}>
          <p onClick={flipCard}>{description}</p>
          <p className={styles.button} onClick={flipCard}>Back ☞</p>
        </div>

      </div>
    </article>
  )
}

function flipCard() {
  event.target.closest('article').classList.toggle('showFront')
  event.target.closest('article').classList.toggle('showBack')
}
