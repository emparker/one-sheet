import Head from 'next/head'
import Navigation from '../components/Navigation'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TETONIC one-sheet</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
