import React from 'react'
import { Links } from './projects'
import { FaGlobe } from 'react-icons/fa'
import { Github } from '../Icons'

const Links: React.FC<Links> = ({ site, repo }) => (
  <>
    {site && (
      <a target='_blank' href={site} className="flex gap-3 items-center w-fit text-blue-500">
        <FaGlobe />
        <p>Website</p>
      </a>
    )}
    {repo && (
      <a target='_blank' href={repo} className="flex gap-3 items-center w-fit text-blue-500">
        <Github />
        <p>Repository</p>
      </a>
    )}
  </>
)

export default Links
