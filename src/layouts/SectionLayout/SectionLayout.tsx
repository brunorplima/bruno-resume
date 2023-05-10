import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import { Color } from '../../types/style'

interface Props {
  readonly children: React.ReactNode
  readonly h1: string
  readonly h2: string
  readonly lightFont?: 100 | 200 | 300 | 400
  readonly bgColor?: Color
  readonly headerMarginBottom?: number
}

const SectionLayout: React.FC<Props> = ({ children, h1, h2, lightFont, bgColor = 'white', headerMarginBottom = 90 }) => (
  <section
    className={`pt-24 pb-32 px-5 sm:px-7 md:px-9 lg:px-11 xl:px-14 2xl:px-32 relative ${lightFont ? 'text-slate-' + lightFont : ''}`}
    style={{ backgroundColor: `var(--${bgColor})` }}
  >
    <>
      <SectionHeader {...{ h1, h2 }} />
      {headerMarginBottom && <div style={{ marginBottom: headerMarginBottom }}></div>}
      {children}
    </>
  </section>
)

export default SectionLayout
