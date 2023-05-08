import React from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import Project from './Project'
import projects, { getProjectKey } from './projects'
import useScreenWidth from '../../hooks/useScreenWidth'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import usePortfolioSection from './usePortfolioSection.hooks'

const PortfolioSection = () => {
  const screenWidth = useScreenWidth()
  const {
    projectWidth,
    slideWidth,
    slideRef,
    projectsList,
    changeLocation
  } = usePortfolioSection(screenWidth, projects)

  return (
    <SectionLayout h1='Checkout My Work' h2='Portfolio'>
      <div className="flex justify-center">
        <div
          ref={slideRef}
          className="flex justify-between overflow-x-hidden"
          style={{ width: slideWidth }}
        >
          {
            projectsList.map(project => (
              <Project key={getProjectKey(project)} width={projectWidth} screenWidth={screenWidth} {...project} />
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
    </SectionLayout>
  )
}

export default PortfolioSection
