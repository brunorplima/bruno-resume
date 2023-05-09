import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import { IconType } from 'react-icons/lib'

interface Props {
  readonly imgSrc: string
  readonly company: string
  readonly jobType: 'Full-Time' | 'Freelance Work'
  readonly period: string
  readonly skills?: IconType[]
  readonly children?: React.ReactNode
  readonly link?: string
}

const Experience: React.FC<Props> = ({ imgSrc, company, jobType, period, skills, children, link }) => {
  return (
    <div className="bg-white p-6 flex flex-col shadow rounded lg:w-72 xl:w-80 mb-7 lg:mb-0 transition-shadow hover:shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between lg:flex-col">
        <div className="flex items-center gap-4 mb-3 sm:mb-0 lg:mb-3">
          <Image src={imgSrc} alt={company} width={45} height={45} />
          <div>
            <h2 className='flex-1 text-xl sm:text-2xl xl:text-3xl'>{company}</h2>
            <p>{jobType}</p>
          </div>
        </div>
        <div className='flex items-end'>
          <div
            className="rounded p-0 px-1 text-sm"
            style={{ backgroundColor: 'var(--secondary)' }}
          >
            {period}
          </div>
        </div>
      </div>

      <div className="w-full mr-auto ml-auto my-5" style={{ backgroundColor: 'var(--primary)', paddingTop: '0.5px' }}></div>

      <div>{children}</div>

      <div className="mt-4 py-2 px-6 flex gap-3 items-center bg-slate-200 w-fit rounded-full">
        {skills?.map((Icon, idx) => <Icon key={'' + idx} size={24}/>)}
      </div>

      {
        link && (
          <>
            <div className="flex-1"></div>
            <div className='my-8 text-center'><Button theme='secondary' link={link}>Visit Website</Button></div>
          </>
        )
      }
    </div>
  )
}

export default Experience
