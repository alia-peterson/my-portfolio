import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <h1>Alia Peterson</h1>
      </div>

      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/Projects'>
          <a>Projects</a>
        </Link>

        <Link href='/About'>
          <a>About</a>
        </Link>

        <Link href='/Contact'>
          <a>Contact</a>
        </Link>
      </div>
    </header>
  )
}
