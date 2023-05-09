import React from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import graduations from './graduations'

const EducationSection = () => {
  return (
    <SectionLayout h2='Education' h1='Begin Of My Journey' withBgColor>
      <div className='flex flex-col items-center'>
        {graduations.map(graduation => (
          <div key={graduation.name} className="flex flex-col lg:flex-row mb-10 lg:w-3/4 lg:gap-14">
            <div className="flex flex-col flex-1 text-lg mb-3 lg:max-w-xs lg:items-end">
              <div className="text-xl font-bold">{graduation.name}</div>
              <div style={{ color: 'var(--secondary)' }}>{graduation.institution}</div>
              <div className="text-slate-500">{graduation.type}</div>
              <div className="text-slate-500">{graduation.period}</div>
            </div>
            {/* <div className="hidden lg:flex flex-col w-14">
              <div className="flex flex-col items-center w-full h-full">
                <div className="w-0.5 h-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                <div className="w-full h-14 rounded-full border-2">
                  <div className="h-full w-full rounded-full border-2" style={{ borderColor: 'var(--primary)' }}></div>
                </div>
                <div className="w-0.5 h-full" style={{ backgroundColor: 'var(--primary)' }}></div>
              </div>
            </div> */}
            <div className="bg-white p-5 transition shadow-lg text-slate-500 rounded flex-1">
              {graduation.description}
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default EducationSection
