import React from 'react'
import H2 from '../typography/H2'
import H1 from '../typography/H1'
import Separator from '../Separator'

interface Props {
  readonly h1: string
  readonly h2: string
}

const SectionHeader: React.FC<Props> = ({ h1, h2 }) => {
  return (
    <>
      <H2 text={h2} />
      <H1 text={h1} />
      <Separator />
    </>
  )
}

export default SectionHeader