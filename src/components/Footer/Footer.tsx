import Image from 'next/image'
import React from 'react'
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import { IconType } from 'react-icons'

type SocialMedia = {
  readonly href: string
  readonly Icon: IconType
}

const socialMedias: SocialMedia[] = [
  {
    href: 'https://www.linkedin.com/mwlite/in/bruno-lima-673955159',
    Icon: SlSocialLinkedin
  },
  {
    href: 'https://github.com/brunorplima',
    Icon: FiGithub
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100002401369385&ref=bookmarks',
    Icon: SlSocialFacebook
  },
  {
    href: 'https://www.instagram.com/bruno.fg58/?hl=en',
    Icon: FiInstagram
  },
]

const Footer = () => {
  return (
    <div
      className='flex flex-col items-center py-32'
      style={{ backgroundColor: 'var(--primary-light)' }}
    >
      <Image src='/brunolima-logo.png' alt='Bruno Lima logo' width={60} height={74} />

      <div className="flex gap-7 mt-16 text-slate-500">
        {socialMedias.map(({ href, Icon }) => (
          <div key={href} className="w-12 h-12 rounded-full overflow-hidden bg-white">
            <a className='w-full h-full grid place-items-center' href={href} target='_blank'>
              <Icon size={24} />
            </a>
          </div>
        ))}
      </div>

      <div className='mt-10 text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>brunolima.cad@gmail.com</div>
      <div className='mt-5 text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>(778) 682-7766</div>
    </div>
  )
}

export default Footer
