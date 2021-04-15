import Image from 'next/image'
import styles from '../styles/Project.module.scss'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository, image }) {
  const techs = technologies.join(', ')

  return (
    <article className={styles.card}>

      <h2>{title}</h2>
      <div className={styles.body}>

        <div className={styles.text}>
          <div>
            <div className={styles.link}>
              {deployed && <p><a href={deployed} target='_blank'>Live Website ☞</a></p>}
              {repository && <p><a href={repository} target='_blank'>Repository ☞</a></p>}
            </div>
            <p><span>Team Type:</span> {type}</p>
            <p><span>Timeframe:</span> {timeframe}</p>
            <p><span>Technologies Used:</span> {techs}</p>
            <p><span>Description:</span> {description}</p>
          </div>

          <Image src={image.src} height={image.height} width={image.width} />
        </div>

      </div>
    </article>
  )
}
