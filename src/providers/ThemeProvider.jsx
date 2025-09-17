import { useEffect } from 'react'

function ThemeProvider({ theme = '90s', children }) {
  useEffect(() => {
    document.body.classList.add(`theme-${theme}`)
    return () => {
      document.body.classList.remove(`theme-${theme}`)
    }
  }, [theme])

  return <>{children}</>
}

export default ThemeProvider
