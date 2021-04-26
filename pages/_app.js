import '../styles/globals.scss'
import Layout from '../components/Layout'
import { AppWrapper } from '../context/theme-context'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default MyApp
