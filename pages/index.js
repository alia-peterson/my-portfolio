import Head from 'next/head'

import info from '../data/information'
import body from '../styles/Home.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const types = Object.keys(info.proficient)

  const profs = types.map((type, i) => {
    return (
      <p key={i}>
        <span className={body.span}>{type}</span>: {info.proficient[type]}
      </p>
    )
  })

  return (
    <div className={body.container}>
      <Head>
        <title>Alia Peterson Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main className={body.main}>
        <h2 className={body.title}>About Me</h2>
        <section className={body.section}>
          <article>
            <h3>Summary:</h3>
            <p>{info.summary}</p>
          </article>
          <article>
            <h3>Currently Learning:</h3>
            <p>{info.current}</p>
            <h3>Proficient In:</h3>
            <div>{profs}</div>
          </article>
        </section>
      </main>
      <Footer />

    </div>
  )
}
