import Image from 'next/image'
import styles from '../styles/Project.module.scss'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository }) {
  const techs = technologies.join(', ')

  return (
    <article className={styles.card}>

      <h3>{title}</h3>
      <div className={styles.body}>

        <div className={styles.text}>
          <div>
            {deployed && <p><a href={deployed} target='_blank'>Live Website ☞</a></p>}
            {repository && <p><a href={repository} target='_blank'>Repository ☞</a></p>}
            <p><span>Team Type:</span> {type}</p>
            <p><span>Timeframe:</span> {timeframe}</p>
            <p><span>Technologies Used:</span> {techs}</p>
          </div>

          <Image src='/images/eye.png' height={140} width={140}/>
        </div>

        <p><span>Description:</span> {description}</p>

      </div>
    </article>
  )
}
