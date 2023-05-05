import React from 'react'

const Separator: React.FC = () => {
  return (
    <div className='flex gap-1 w-28 mb-6'>
      <div className='rounded h-1 flex-1' style={{ backgroundColor: 'var(--secondary)' }}></div>
      <div className='rounded h-1 w-2' style={{ backgroundColor: 'var(--secondary)' }}></div>
      <div className='rounded h-1 w-3' style={{ backgroundColor: 'var(--secondary)' }}></div>
    </div>
  )
}

export default Separator