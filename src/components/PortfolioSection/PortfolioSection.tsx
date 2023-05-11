import React from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import Project from './Project'
import projects from './projects'
import useScreenWidth from '../../hooks/useScreenWidth'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import usePortfolioSection from './usePortfolioSection.hooks'
import Modal from '../Modal'
import ProjectModal from './ProjectModal'

const PortfolioSection = () => {
  const screenWidth = useScreenWidth()
  const {
    projectWidth,
    slideWidth,
    slideRef,
    projectsList,
    changeLocation,
    selectedProject,
    setSelectedProject
  } = usePortfolioSection(screenWidth, projects)

  return (
    <SectionLayout id='portfolioSection' h1='Latest Projects' h2='Portfolio'>
      <div className="flex justify-center">
        <div
          ref={slideRef}
          className="flex justify-between overflow-x-hidden"
          style={{ width: slideWidth }}
        >
          {
            projectsList.map((project, idx) => (
              <Project
                key={project.legend + idx}
                width={projectWidth}
                screenWidth={screenWidth}
                project={project}
                setSelectedProject={setSelectedProject}
              />
            ))
          }
        </div>
      </div>

      <div className="mt-10 sm:mt-14 w-full flex justify-center">
        <div className="w-20 flex justify-between">
          <GoChevronLeft
            className='cursor-pointer hover:text-slate-400'
            size={30}
            onClick={() => changeLocation('-')}
          />
          <GoChevronRight
            className='cursor-pointer hover:text-slate-400'
            size={30}
            onClick={() => changeLocation('+')}
          />
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        contentWidth={screenWidth < 600 ? '90%' : '70%'}
      >
        <ProjectModal project={selectedProject} setSelectedProject={setSelectedProject} />
      </Modal>
    </SectionLayout>
  )
}

export default PortfolioSection
