import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../src/components/Banner'
import SkillsSection from '../src/components/SkillsSection'
import ExperienceSection from '../src/components/ExperienceSection'
import PortfolioSection from '../src/components/PortfolioSection'
import EducationSection from '../src/components/EducationSection'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bruno Lima - Software Developer</title>
        <meta name='description' content='Bruno Lima - Software/Web Developer' />
        <link rel='icon' href='/bl-logo.png' />
      </Head>

      <Navbar />

      <Banner />

      <SkillsSection />

      <ExperienceSection />

      <PortfolioSection />

      <EducationSection />

      <Footer />
    </>
  )
}

export default Home
