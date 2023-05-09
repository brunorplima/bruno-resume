import { useState, useMemo, createRef, useEffect } from "react"
import { Project } from "./projects"

export const FIRST_BREAKPOINT = 500
export const SECOND_BREAKPOINT = 650
export const THIRD_BREAKPOINT = 800
export const FOURTH_BREAKPOINT = 900
export const FIFTH_BREAKPOINT = 1150

export const DEFAULT_SIZE = 350
export const SM_SIZE = 210
export const MD_SIZE = 260
export const LG_SIZE = 310
export const XL_SIZE = 370

const usePortfolioSection = (screenWidth: number, projects: Project[]) => {
  const [location, setLocation] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const slideRef = createRef<HTMLDivElement>()

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.scrollTo({ behavior: "smooth", left: location })
    }
  }, [location, screenWidth])

  const changeLocation = (op: '+' | '-') => {
    if (op === '+') {
      const maxLocation = projectsList.length * projectWidth
      if (location < maxLocation) setLocation(location + projectWidth)
    }
    if (op === '-') {
      if (location > 0) setLocation(location - projectWidth)
    }
  }

  const projectsList = useMemo(() => {
    const list = [
      ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects,
      ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects,
      ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects,
      ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects,
      ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects,
    ]
    return list
  }, [projects])

  const projectWidth = useMemo(() => {
    let width = DEFAULT_SIZE
    if (screenWidth < FIRST_BREAKPOINT) width = screenWidth - 64
    else if (screenWidth >= FIRST_BREAKPOINT && screenWidth < SECOND_BREAKPOINT) width = SM_SIZE
    else if (screenWidth >= SECOND_BREAKPOINT && screenWidth < THIRD_BREAKPOINT) width = MD_SIZE
    else if (screenWidth >= THIRD_BREAKPOINT && screenWidth < FOURTH_BREAKPOINT) width = LG_SIZE
    else if (screenWidth >= FOURTH_BREAKPOINT && screenWidth < FIFTH_BREAKPOINT) width = XL_SIZE
    
    const repetitions = projectsList.length / projects.length
    const half = Math.floor(repetitions / 2) * projects.length + 1
    const place = half * width - width
    setLocation(place)
    return width
  }, [screenWidth, projectsList])

  const slideWidth = useMemo(() => {
    if (screenWidth < FIRST_BREAKPOINT) return projectWidth * 1
    else if (screenWidth >= FIRST_BREAKPOINT && screenWidth < FIFTH_BREAKPOINT) return projectWidth * 2
    else return projectWidth * 3
  }, [screenWidth, projectWidth])

  return {
    projectWidth,
    slideWidth,
    slideRef,
    projectsList,
    changeLocation,
    selectedProject,
    setSelectedProject
  }
}

export default usePortfolioSection
