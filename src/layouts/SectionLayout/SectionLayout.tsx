import React from 'react'

interface Props {
  readonly children: React.ReactNode
}

const SectionLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='pt-20 pb-32 px-5 sm:px-7 md:px-9 lg:px-11 xl:px-14'>
      {children}
    </div>
  )
}

export default SectionLayout
