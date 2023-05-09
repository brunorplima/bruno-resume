import React, { useMemo } from 'react'
import { Style } from '../../types/style'
import styles from './button.module.css'

interface Props {
  readonly children: React.ReactNode
  readonly link?: string
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>
  readonly theme?: 'primary' | 'secondary'
}

const sharedStyle = 'border-2 rounded py-2 px-6 cursor-pointer'

const primaryStyle: Style = {
  className: `${sharedStyle} hover:bg-slate-300`,
  style: { color: 'var(--dark)', borderColor: 'var(--dark)' }
}

const secondaryStyle: Style = {
  className: `${sharedStyle} text-white hover:text-white ${styles.buttonSecondary}`
}

const Button: React.FC<Props> = ({ children, link, onClick, theme = 'primary' }) => {

  const style = useMemo(() => {
    return theme === 'primary' ? primaryStyle : secondaryStyle
  }, [theme])

  return (
    <>
      {
        link ? (
          <a
            target='_blank'
            href={link}
            {...style}
          >
            {children}
          </a>
        ) : (
          <button
            onClick={onClick}
            {...style}
          >
            {children}
          </button>
        )
      }
    </>
  )
}

export default Button
