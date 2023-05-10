import { CSSProperties } from "react"

export type Style = {
  className?: string
  style?: CSSProperties
}

export type Color = 'primary-lighter' | 'primary-light' | 'primary' | 'secondary' | 'dark'
