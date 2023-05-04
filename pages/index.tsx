import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../src/components/Banner'
import SkillsSection from '../src/components/SkillsSection'
import SectionLayout from '../src/layouts/SectionLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Lima - Software Developer</title>
        <meta name='description' content='Bruno Lima - Software/Web Developer' />
        <link rel='icon' href='/bl-logo.png' />
      </Head>

      <Banner />

      <SectionLayout>
        <SkillsSection />
      </SectionLayout>
    </>
  )
}

export default Home
