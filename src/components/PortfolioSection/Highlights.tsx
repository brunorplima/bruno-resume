import React from 'react'
import { Project } from './projects'
import { IoConstruct } from 'react-icons/io5'
import { IoMdLock } from 'react-icons/io'

const Highlights: React.FC<Pick<Project, 'inDevelopment' | 'privateRepo'>> = ({ inDevelopment, privateRepo }) => (
  <div className="flex gap-4 flex-wrap select-none">
    {inDevelopment && (
      <div className='px-3 py-1 flex gap-3 items-center rounded-full border w-fit min-w-fit' style={{ borderColor: 'var(--primary)' }}>
        <IoConstruct />
        <p>Project in development</p>
      </div>
    )}
    {privateRepo && (
      <div className='px-3 py-1 flex gap-3 items-center rounded-full border w-fit min-w-fit' style={{ borderColor: 'var(--primary)' }}>
        <IoMdLock />
        <p>Private repo</p>
      </div>
    )}
  </div>
)

export default Highlights
