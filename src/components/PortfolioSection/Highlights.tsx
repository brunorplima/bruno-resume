import React from 'react'
import { Highlight } from './projects'

interface Props {
  highlights: Highlight[] | undefined
}

const Highlights: React.FC<Props> = ({ highlights }) => (
  <>
    {
      highlights && highlights.length && (
        <div className="flex gap-4 flex-wrap select-none">
          {highlights.map(highlight => (
            <div className='px-3 py-1 flex gap-3 items-center rounded-full border w-fit min-w-fit' style={{ borderColor: 'var(--primary)' }}>
              {highlight.Icon && <highlight.Icon />}
              <p>{highlight.text}</p>
            </div>
          ))}
        </div>
      )
    }
  </>
)

export default Highlights
