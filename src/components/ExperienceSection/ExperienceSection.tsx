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
    <SectionLayout id='experienceSection' h2='Experience' h1='3 Years of Working Experience'  bgColor='primary-lighter'>
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
              <p>As a software developer at Strattix, I contributed to the development of a product that helped companies in the oil and gas industry manage operations and costs, by debugging, improving code design and application performance, and implementing new features. I actively collaborated with the engineering team, working closely together to ensure a clear understanding of project requirements, which enabled me to create accurate technical specifications. I used React and Ruby on Rails to build UI, create APIs, and correctly integrate both ends. I implemented testing, utilized CI/CD with CircleCI, and deployed to multiple AWS ES environments to ensure software quality and improve efficiency</p>
        </Experience>

        <Experience
          imgSrc='/vela.ico'
          company='Providence Books & Press'
          period='Mar 2021 - Jul 2021'
          link='https://www.providencebookspress.com/'
          jobType='Freelance Work'
          skills={[Typescript, ReactIcon, Database, NextJs, Firebase]}
        >
          <p>I Designed and developed an e-commerce website to sell the company&apos;s products. The project contains user authentication to allow users to have a better experience and relationship with the company. The website has a platform for Christian articles and texts which users may interact with by leaving their comments. A built-in review system helps customers to choose the right products. At last, an admin panel was developed to allow the management of the database, website content, history of purchases, and user information.</p>
        </Experience>

        <Experience
          imgSrc='/iplogo.gif'
          company='Inheritance Publications'
          period='May 2020 - Apr 2021'
          link='https://inhpubli.vercel.app/'
          jobType='Full-Time'
          skills={[Javascript, ReactIcon, Redux, Database, Firebase]}
        >
          <p>I redesigned and developed Inheritance Publications&apos; e-commerce website, creating a modern and user-friendly platform. I improved the layout, user experience, and search functionality, making it easier for customers to browse and find products. The website, powered by Next.js, benefited from server-side rendering, resulting in improved performance and ease of maintenance. I optimized the database structure and integrated the Paypal payment system API for secure transactions. The positive feedback received validated the success of the website&apos;s transformation.</p>
        </Experience>
      </div>
    </SectionLayout>
  )
}

export default ExperienceSection
