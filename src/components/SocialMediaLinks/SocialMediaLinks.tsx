import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Style } from '../../types/style'

const containerStyle: Style = {
  className: 'absolute rounded-full right-5 lg:left-5 lg:right-auto lg:top-48 flex flex-col gap-2 py-2 z-10',
  style: { border: '1px solid var(--dark)', color: 'var(--dark)' }
}

const SocialMediaLinks = () => {
  return (
    <div {...containerStyle}>
      <a target='_blank' href='https://www.linkedin.com/mwlite/in/bruno-lima-673955159' className='p-2'>
        <FaLinkedinIn size={24} />
      </a>
      <a target='_blank' href='https://github.com/brunorplima' className='p-2'>
        <FaGithub size={24} />
      </a>
      <a target='_blank' href='https://www.facebook.com/profile.php?id=100002401369385' className='p-2'>
        <FaFacebookF size={24} />
      </a>
      <a target='_blank' href='https://www.instagram.com/bruno.fg58/?hl=en' className='p-2'>
        <AiOutlineInstagram size={24} />
      </a>
    </div>
  )
}

export default SocialMediaLinks