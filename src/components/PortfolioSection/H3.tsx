import React from 'react'

interface Props {
  readonly children: React.ReactNode
}

const H3: React.FC<Props> = ({ children }) => (
  <h3 className='text-xl mt-8 mb-3 pl-3 border-l-8' style={{ borderColor: 'var(--secondary)' }}>
    {children}
  </h3>
)

export default H3
