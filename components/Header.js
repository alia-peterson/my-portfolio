import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Alia Peterson Portfolio</h1>
    
      <div className={styles.menu}>
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
