import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    if(theme === "dark") return document.body.classList.add('dark-theme')
    return document.body.classList.remove('dark-theme')
  }

  useEffect(() => {
    handleTheme()

    return () => {
      handleTheme()
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