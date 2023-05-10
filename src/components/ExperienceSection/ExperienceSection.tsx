import React from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import Image from 'next/image'
import Experience from '../Experience'
import {
  Css,
  Database,
  Firebase,
  Html,
  Javascript,
  MySql,
  NextJs,
  ReactIcon,
  Redux,
  RubyOnRails,
  Typescript
} from '../Icons'

const ExperienceSection = () => {
  return (
    <SectionLayout h2='Experience' h1='3 Years of Working Experience'  bgColor='primary-lighter'>
      <Image
        className='absolute top-0 right-0'
        src='/sqr-shapes.png'
        alt='Square Shapes'
        width={466}
        height={150}
      />
      <div className="flex flex-col lg:flex-row lg:justify-evenly">
        <Experience
          imgSrc='/strattix.jpg'
          company='Strattix'
          period='Jul 2021 - Apr 2023'
          link='https://strattix.com'
          jobType='Full-Time'
          skills={[RubyOnRails, ReactIcon, Redux, MySql, Html, Css]}
        >
              <p>As a software developer at Strattix, I contributed to the development of a product that helped companies in the oil and gas industry manage operations and costs, by debugging, improving code, and implementing new features. I worked closely with the engineering team to clarify requirements. I used React and Ruby on Rails to build UI and create APIs. I also implemented testing and worked with CI/ CD to ensure software quality and improve efficiency.</p>
        </Experience>

        <Experience
          imgSrc='/vela.ico'
          company='Providence Books & Press'
          period='Mar 2021 - Jul 2021'
          link='https://www.providencebookspress.com/'
          jobType='Freelance Work'
          skills={[Typescript, ReactIcon, Database, NextJs, Firebase]}
        >
          <p>I Designed and developed an e-commerce website to sell the company&apos;s products. The project contains user authentication to allow users to have a better experience and relationship with the company. The website has a platform for Christian articles and texts which users may interact with by leaving their comments. A built-in review system helps customers to choose the right products. At last, an admin panel was developed to allow the management of database, website content, history of purchases and user information.</p>
        </Experience>

        <Experience
          imgSrc='/iplogo.gif'
          company='Inheritance Publications'
          period='May 2020 - Apr 2021'
          link='https://inhpubli.vercel.app/'
          jobType='Full-Time'
          skills={[Javascript, ReactIcon, Redux, Database, Firebase]}
        >
          <p>I designed and developed the company&apos;s e-commerce website. Further I received a job offer to keep working on the website with duties such as keep developing new solutions to the website, improve layout and UX, create and optimize content, keep improving the database structure, etc.</p>
        </Experience>
      </div>
    </SectionLayout>
  )
}

export default ExperienceSection
