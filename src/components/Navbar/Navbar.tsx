import Image from 'next/image'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import css from './navbar.module.css'

type Link = { href: string, label: string }

const links: Link[] = [
  { href: '#home', label: 'Home' },
  { href: '#skillsSection', label: 'Skills' },
  { href: '#experienceSection', label: 'Experience' },
  { href: '#portfolioSection', label: 'Portfolio' },
  { href: '#educationSection', label: 'Education' },
  { href: '#contactSection', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className='sticky top-0 left-0 z-50 bg-white border-b-2 py-2'
      style={{ borderColor: 'var(--secondary)' }}
    >
      <div className='flex justify-between '>
        <div className='grid pl-4 lg:pl-7 xl:pl-10 2xl:pl-20 w-20'>
          <div className='w-7 lg:w-10'>
            <a href='#'><Image src='/brunolima-logo.png' alt='Bruno Lima logo' width={40} height={49} /></a>
          </div>
        </div>

        <div className='hidden md:flex flex-1 items-center justify-between max-w-3xl lg:text-lg xl:text-xl pr-4 lg:pr-7 xl:pl-10 2xl:pr-20'>
          {links.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
        </div>

        <div className="flex-1 flex md:hidden items-center justify-end pr-4">
          <div className='cursor-pointer' onClick={() => setOpen(!open)}>
            {open ? <MdClose size={30}/> : <FiMenu size={30}/>}
          </div>
        </div>
      </div>

      <div className={`flex flex-col items-center gap-3 md:hidden overflow-hidden ${open ? css.show : css.hide} text-xl`}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
      </div>
    </nav>
  )
}

export default Navbar
