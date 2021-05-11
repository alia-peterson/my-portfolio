import Image from 'next/image'
import styles from '../styles/Project.module.scss'
import { useThemeContext } from '../context/theme-context'

export default function Card({ title, type, timeframe, description, technologies, deployed, repository, image }) {
  const techs = technologies.join(', ')
  const { active } = useThemeContext()

  return (
    <article className={`${styles.card} ${active ? 'dark' : ''} col-md-3`}>

      <h2>{title}</h2>

      <div className={styles.header}>
        {type === 'Group' ? 
          <div className={styles.icon}>
            <Image src={'/icons/group-icon.png'} alt={type} height={50} width={50} /> 
            <div className={styles.tooltip}>{type}</div>
          </div> :
          <div className={styles.icon}>
            <Image src={'/icons/solo-icon.png'} alt={type} height={50} width={35} />
            <div className={styles.tooltip}>{type}</div>
          </div>
        }

        <Image src={'/icons/clock-icon.png'} height={50} width={50} />
        <Image src={'/icons/react-icon.png'} height={50} width={50} />
        {/* <p><span>Timeframe:</span> {timeframe}</p> */}
        {/* <p><span>Technologies Used:</span> {techs}</p> */}
      </div>

      <div className={styles.body}>

        <div className={styles.inner}>

          {deployed && <p><a href={deployed} target='_blank'>Live Website ☞</a></p>}
          {repository && <p><a href={repository} target='_blank'>Repository ☞</a></p>}

        </div>

        {/* <Image src={image.src} height={image.height} width={image.width} /> */}

      </div>
      
      <p>{description}</p>
    </article>
  )
}
