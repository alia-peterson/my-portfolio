import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'

import Head from 'next/head'
import Layout from '../components/Layout'
import { AppWrapper } from '../context/theme-context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  )
}

export default MyApp
