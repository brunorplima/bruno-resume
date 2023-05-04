import React from 'react'
import H1 from '../typography/H1'
import H2 from '../typography/H2'

const SkillsSection = () => {
  return (
    <section className=''>
      <H2 text='About' />
      <H1 text='My Qualifications and Skills' />

      <div className='flex gap-1 w-28 mb-6'>
        <div className='rounded h-1 flex-1' style={{ backgroundColor: 'var(--secondary)' }}></div>
        <div className='rounded h-1 w-2' style={{ backgroundColor: 'var(--secondary)' }}></div>
        <div className='rounded h-1 w-3' style={{ backgroundColor: 'var(--secondary)' }}></div>
      </div>

      <h3 className='text-xl'>Personal Qualifications</h3>
      
    </section>
  )
}

export default SkillsSection