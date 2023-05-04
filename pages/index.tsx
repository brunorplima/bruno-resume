import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../src/components/Banner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Lima - Software Developer</title>
        <meta name='description' content='Bruno Lima - Software/Web Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner />
    </>
  )
}

export default Home
