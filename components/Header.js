import Link from 'next/link'
import Image from 'next/image'

import { useThemeContext } from '../context/theme-context'
import ThemeButton from '../components/ThemeButton'

import styles from '../styles/Header.module.scss'

export default function Header() {
  const { active } = useThemeContext()

  return (
    <header className={`${styles.header} ${active ? 'light' : ''}`}>
      <div>
        <ThemeButton />
      </div>
      <h1>Alia Peterson Portfolio</h1>

      <section className={`${styles.menu} ${active ? 'light' : ''}`}>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/Projects'>
          <a>Projects</a>
        </Link>

        <Link href='/Contact'>
          <a>Contact</a>
        </Link>
      </section>
    </header>
  )
}
