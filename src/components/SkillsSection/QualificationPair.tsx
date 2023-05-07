import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

interface Props {
  readonly qualification1: string
  readonly qualification2?: string
}

const QualificationPair: React.FC<Props> = ({ qualification1, qualification2 }) => (
  <div className='flex flex-col sm:flex-row sm:gap-4'>
    <div className='flex flex-1 gap-2'>
      <GiCheckMark className='translate-y-1'/>
      <p className='text-lg'>{qualification1}</p>
    </div>
    {
      qualification2 && (
        <div className='flex flex-1 gap-2'>
          <GiCheckMark className='translate-y-1'/>
          <p className='text-lg'>{qualification2}</p>
        </div>
      )
    }
  </div>
)

export default QualificationPair
