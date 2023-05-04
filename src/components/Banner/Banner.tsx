import React from 'react'
import * as styles from './styles'
import css from './banner.module.css'
import Image from 'next/image'
import SocialMediaLinks from '../SocialMediaLinks'

const Banner = () => {
  return (
    <main {...styles.main}>
      <div className={css.skewedBackground}></div>

      <div {...styles.leftParent}>
        <SocialMediaLinks />
        <div {...styles.imageContainer}>
          <Image
            {...styles.image}
            alt='Bruno Lima'
            src='/brunolima_main.png'
            width={600} height={850}
          />
        </div>
      </div>
      
      <div {...styles.rightParent}>
        <div {...styles.content}>
            <p {...styles.introduction}>Hello I&apos;m</p>
            <h1 {...styles.name}>Bruno Lima</h1>
            <h2 className='text-xl md:text-3xl mb-2'>Software Developer</h2>
            <p className='text-base md:text-xl'>
              I&apos;m driven by a desire to create software that makes a real difference in people&apos;s lives,
              and I have a proven track record of delivering high-quality code on time and on budget.
            </p>
        </div>
      </div>
    </main>
  )
}

export default Banner