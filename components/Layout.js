import Head from 'next/head'
import { useThemeContext } from '../context/theme-context'
import styles from '../styles/Home.module.scss'


import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  const { active } = useThemeContext()

  return (
    <>
      <Head>
        <title>Alia Peterson Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet" />
      </Head>

      <div className={`${styles.container} ${active ? 'light' : ''}`}>
        <Header />

        {children}

        <Footer />
      </div>
    </>
  )
}

export default Layout
