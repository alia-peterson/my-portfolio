import Image from 'next/image'
import styles from '../styles/Project.module.scss'
import { useThemeContext } from '../context/theme-context'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository, image }) {
  const techs = technologies.join(', ')
  const { active } = useThemeContext()

  return (
    <article className={`${styles.card} ${active ? 'light' : ''}`}>

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
