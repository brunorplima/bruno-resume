import React from 'react'

interface Props {
  readonly text: string
}

const H2: React.FC<Props> = ({ text }) => {
  return (
    <h2 className='text-xl md:text-2xl xl:text-3xl mb-4' style={{ color: 'var(--secondary)' }}>
      {text}
    </h2>
  )
}

export default H2