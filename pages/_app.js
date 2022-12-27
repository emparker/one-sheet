import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TETONIC one-sheet</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
