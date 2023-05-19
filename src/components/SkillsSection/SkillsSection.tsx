import React, { useMemo } from 'react'
import QualificationPair from './QualificationPair'
import SectionLayout from '../../layouts/SectionLayout'
import {
  Css,
  Firebase,
  Github,
  Html,
  Javascript,
  MySql,
  NextJs,
  ReactIcon,
  Redux,
  RubyOnRails,
  Tailwind,
  Typescript
} from '../Icons'

const iconsStyle = 'flex justify-evenly items-center'

const SkillsSection = () => {

  const personalQualifications = useMemo(() => [
    ['Quick learner', 'Hard worker'],
    ['Disciplined', 'Development with best practices'],
    ['Detail oriented', 'Good communicator'],
    ['Problem solver', 'Desire to learn']
  ], [])

  const professionalSkills = useMemo(() => [
    ['Javascript / ES6', 'Typescript'],
    ['Ruby on Rails', 'CSS / SCSS'],
    ['React', 'Git'],
    ['HTML', 'Next.js'],
    ['SQL & NoSQL', 'Bootstrap, Tailwind'],
    ['Firebase', 'Testing'],
    ['API', 'Teamwork'],
  ], [])

  return (
    <SectionLayout id='skillsSection' h2='Skills' h1='My Qualifications and Skills'>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:mr-5 ">
          <div>
              <h3 className='text-xl mb-3'>Personal Qualifications</h3>
            {
              personalQualifications.map(([str1, str2]) => (
                <QualificationPair
                  key={`${str1}-${str2}`}
                  qualification1={str1}
                  qualification2={str2}
                />
              ))
            }
            <br/><br/>
            <h3 className="text-xl mb-3">Professional Skills</h3>
            {
              professionalSkills.map(([skill1, skill2]) => (
                <QualificationPair
                  key={`${skill1}-${skill2}`}
                  qualification1={skill1}
                  qualification2={skill2}
                />
              ))
            }
            <p className='mt-5 lg:mt-10 text-lg'>
              I am dedicated to delivering high-quality code that adheres to industry-standard design patterns and principles. By incorporating best practices into my software development process, I ensure the development of robust and maintainable solutions.
            </p>
          </div>
        </div>
        <div
          className="basis-1/3 xl:flex-1 mt-20 md:mt-0 flex justify-center"
          style={{ color: 'var(--primary)', minHeight: 440 }}
        >
          <div className="max-w-md w-full flex flex-col justify-around relative py-8"> {/* style={{ minWidth: 270 }}> */}
            <div
              className="absolute top-0 left-0 right-0 bottom-0 border skew-y-6 -z-10"
              style={{ border: '12px solid var(--secondary)' }}
            ></div>
            <div className={iconsStyle}>
              <RubyOnRails size={58} />
              <Typescript size={32} />
              <MySql size={49} />
            </div>
            <div className={iconsStyle}>
              <Javascript size={32} />
              <Html size={34} />
              <ReactIcon size={34} />
            </div>
            <div className={iconsStyle}>
              <Css size={34} />
              <Github size={34} />
              <Tailwind size={34} />
            </div>
            <div className={iconsStyle}>
              <NextJs size={34} />
              <Firebase size={34} />
              <Redux size={32} />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default SkillsSection
