import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const handleTheme = () => {
    if(theme === "dark") return document.body.classList.add('dark')
    return document.body.classList.remove('dark')
  }

  useEffect(() => {
    handleTheme()

    return () => {
      handleTheme()
      console.log('aku di delete mama')
    }

  }, [theme])

  const contextThemeValue = {
    theme, setTheme
  }

  return (
    <ThemeContext.Provider value={contextThemeValue}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export { ThemeProvider, useThemeContext }