import Image from 'next/image'

import { useThemeContext } from '../context/theme-context'
import styles from '../styles/Contact.module.scss'

export default function Tarot({ link, img, height, width, name }) {
  const { active } = useThemeContext()

  return (
    <a href={link} target='_blank' className={styles.link}>

      <article className={`${styles.tarot} ${active ? 'dark' : ''}`}>

        <Image src='/images/moons.png' height={15} width={70} />
        <Image src={`/images/${img}.png`} height={height} width={width} />
        <p>{name}</p>
        <Image src='/images/moons.png' height={15} width={70} />

      </article>

    </a>
  )
}
