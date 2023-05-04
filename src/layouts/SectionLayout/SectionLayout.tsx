import React from 'react'

interface Props {
  readonly children: React.ReactNode
}

const SectionLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='p-5 sm:p-7 md:p-9 lg:p-11 xl:p-14'>
      {children}
    </div>
  )
}

export default SectionLayout