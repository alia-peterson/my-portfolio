import Image from 'next/image'
import styles from '../styles/Project.module.scss'
import { useThemeContext } from '../context/theme-context'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository, image }) {
  const { active } = useThemeContext()

  const techs = technologies.map((tech, i) => {
    return (
      <div key={i} className={`${styles.icon} ${active ? 'dark' : ''}`}>
        <Image src={`/icons/${tech.toLowerCase()}-icon.png`} alt={`${tech} icon`} height={50} width={50} />
        <div className={styles.tooltip}><p>{tech}</p></div>
      </div>
    )
  })

  return (
    <article className={`${styles.card} ${active ? 'dark' : ''} col-md-3`}>

      <h2>{title}</h2>

      <div className={styles.header}>
        {type === 'Group' ? 
          <div className={`${styles.icon} ${active ? 'dark' : ''}`}>
            <Image src={'/icons/group-icon.png'} alt={`team type - ${type}`} height={50} width={50} />
            <div className={styles.tooltip}><p>{type}</p></div>
          </div> :
          <div className={`${styles.icon} ${active ? 'dark' : ''}`}>
            <Image src={'/icons/solo-icon.png'} alt={`team type - ${type}`} height={50} width={35} />
            <div className={styles.tooltip}><p>{type}</p></div>
          </div>
        }

        <div className={`${styles.icon} ${active ? 'dark' : ''}`}>
          <Image src={'/icons/clock-icon.png'} alt={`timeframe icon - ${timeframe}`} height={50} width={50} />
          <div className={styles.tooltip}><p>{timeframe}</p></div>
        </div>

        {techs}

      </div>

      <div className={styles.body}>

        <div className={styles.inner}>

          {deployed && <p><a href={deployed} target='_blank'>Live Website ☞</a></p>}
          {repository && <p><a href={repository} target='_blank'>Repository ☞</a></p>}

        </div>

        <Image src={image.src} height={image.height} width={image.width} />

      </div>
      
      <p>{description}</p>
    </article>
  )
}
