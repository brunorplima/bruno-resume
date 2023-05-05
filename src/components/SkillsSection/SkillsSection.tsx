import React, { useMemo } from 'react'
import QualificationPair from './QualificationPair'
import {
  SiRubyonrails,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiNextdotjs,
  SiFirebase,
  SiCircleci
} from 'react-icons/si'
import SectionHeader from '../SectionHeader'

const iconsStyle = 'flex justify-evenly items-center'

const SkillsSection = () => {

  const personalQualifications = useMemo(() => [
    ['Quick learner', 'Hard worker'],
    ['Disciplined', 'Passionate about programming'],
    ['Detail oriented', 'Good communicator'],
    ['Problem solver', 'Desire to learn']
  ], [])

  const professionalSkills = useMemo(() => [
    ['Javascript / ES6', 'Typescript'],
    ['Ruby on Rails', 'CSS / SCSS'],
    ['React', 'Git'],
    ['HTML', 'Next.js'],
    ['SQL & NoSQL', 'Bootstrap, Tailwind'],
    ['Firebase', 'CircleCI']
  ], [])

  return (
    <section className=''>
      <SectionHeader h2='Skills' h1='My Qualifications and Skills' />

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:mr-5">
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
        </div>
        <div
          className="basis-1/3 flex flex-col justify-around mt-20 md:mt-0 relative py-8"
          style={{ color: 'var(--primary)', minHeight: 440 }}
        >
          <div
            className="absolute top-0 left-0 right-0 bottom-0 border skew-y-6 -z-10"
            style={{ border: '12px solid var(--secondary)' }}
          ></div>
          <div className={iconsStyle}>
            <SiRubyonrails size={58} />
            <SiTypescript size={32} />
            <SiMysql size={49} />
          </div>
          <div className={iconsStyle}>
            <SiJavascript size={32} />
            <SiHtml5 size={34} />
            <SiReact size={34} />
          </div>
          <div className={iconsStyle}>
            <SiCss3 size={34} />
            <SiGithub size={34} />
            <SiTailwindcss size={34} />
          </div>
          <div className={iconsStyle}>
            <SiNextdotjs size={34} />
            <SiFirebase size={34} />
            <SiCircleci size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection