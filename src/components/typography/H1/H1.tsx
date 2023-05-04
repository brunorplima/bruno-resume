import React from 'react'

interface Props {
  readonly text: string
}

const H1: React.FC<Props> = ({ text }) => {
  return (
    <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-6'>
      {text}
    </h1>
  )
}

export default H1