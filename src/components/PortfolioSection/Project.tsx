import React from 'react'
import Button from '../Button'
import { FIRST_BREAKPOINT } from './usePortfolioSection.hooks'
import { Project } from './projects'

interface Props {
  readonly project: Project
  readonly width: number
  readonly screenWidth: number
  readonly setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>
}

const Project: React.FC<Props> = ({ project, width, screenWidth, setSelectedProject }) => {
  const { imgSrc, imgAlt, links, legend, description } = project

  return (
    <div
      className={`flex flex-col ${screenWidth >= FIRST_BREAKPOINT ? 'px-3' : ''}`}
      style={{ width, minWidth: width }}
    >
      <a target='_blank' href={links.site || links.repo} className='w-full'>
        <img src={imgSrc} alt={imgAlt} className='rounded'/>
      </a>

      <div className='mt-6 flex flex-col flex-1'>
        <a
          target='_blank'
          href={links.site || links.repo}
          className='text-2xl hover:text-slate-400'
        >
          {legend}
        </a>
        <p className='mb-5'>{description}</p>
        <div className="flex-1"></div>
        <div className="flex justify-center">
          <Button
            label='Details'
            onClick={() => setSelectedProject(project)}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
