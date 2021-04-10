import Link from 'next/link'
import Image from 'next/image'
// import hat from '../assets/hat.png'
import styles from '../styles/Home.module.css'

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
