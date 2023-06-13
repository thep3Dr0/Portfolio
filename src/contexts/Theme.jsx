import { React, createContext, useEffect, useState } from 'react'

export const themeContext = createContext()

const themes = [
  'Default',
  'Pink'
]

export function ThemeProvider ({ children }) {
  const [currentTheme, setTheme] = useState('Default')
  const themeStorage = localStorage.getItem('theme')

  const changeTheme = (themeName) => {
    setTheme(themeName)
  }

  useEffect(() => {
    if (themeStorage && themeStorage !== currentTheme) {
      setTheme(themeStorage)
    } else {
      localStorage.setItem('theme', 'Default')
    }
  }, [])

  useEffect(() => {
    document.body.className = ''
    document.body.classList.add(currentTheme)
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <themeContext.Provider value={{ currentTheme, changeTheme, themes }} >
      { children}
    </themeContext.Provider>
  )
}
