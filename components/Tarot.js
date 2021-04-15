import Image from 'next/image'

import styles from '../styles/Contact.module.scss'

export default function Tarot({ link, img, height, width, name }) {
  return (
    <a href={link} target='_blank'>
      <article className={styles.tarot}>
        <Image src='/images/moons.png' height={15} width={70} />
        <Image src={`/images/${img}.png`} height={height} width={width} />
        <p>{name}</p>
        <Image src='/images/moons.png' height={15} width={70} />
      </article>
    </a>
  )
}
