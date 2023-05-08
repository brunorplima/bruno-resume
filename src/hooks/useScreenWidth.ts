import { useState, useEffect } from 'react'

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== 'undefined') return window.innerWidth
    return 0
  })

  useEffect(() => {
    addEventListener('resize', onResize)

    return () => removeEventListener('resize', onResize)
  }, [])

  function onResize() {
    setScreenWidth(window.innerWidth)
  }

  return screenWidth
}

export default useScreenWidth
