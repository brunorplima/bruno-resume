import React from 'react'
import { Project } from './projects'
import { MdClose } from 'react-icons/md'
import Highlights from './Highlights'
import H3 from './H3'
import Links from './Links'
import Separator from '../Separator'

interface Props {
  readonly project: Project | null
  readonly setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>
}

const ProjectModal: React.FC<Props> = ({ project, setSelectedProject }) => {
  const mainDescription = project?.longDescription ? project.longDescription.split('\n') : []

  return (
    <>
      <div className="flex justify-between items-center pb-5 mb-4 border-b-2 text-3xl border-slate-300">
        <h1>{project?.legend}</h1>
        <div className='cursor-pointer hover:text-slate-400 transition' onClick={() => setSelectedProject(null)}>
          <MdClose />
        </div>
      </div>
  
      <div>
        <Highlights highlights={project?.highlights} />
        <H3>The App</H3>
        {mainDescription.map((p, idx) => (
          <p className={idx + 1 !== mainDescription.length ? 'mb-2' : ''} key={p}>
            {p}
          </p>
        ))}
        <H3>Tech Stack</H3>
        <p>{project?.teckStack}</p>
        <H3>Links</H3>
        <Links {...project?.links} />
        <div className="flex justify-center mt-10">
          <Separator />
        </div>
      </div>
    </>
  )
}

export default ProjectModal
