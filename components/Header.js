import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src='/images/bat.png' height={40} width={40}/>
        <h1>Alia Peterson</h1>
      </div>

      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/Projects'>
          <a>Projects</a>
        </Link>

        <Link href='/Contact'>
          <a>Contact</a>
        </Link>
      </div>
    </header>
  )
}
