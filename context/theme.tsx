'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'

import { darkTheme, lightTheme } from 'theme'

import { Mode, ThemeContext } from './types'

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

const Context = React.createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [mode, setMode] = React.useState<Mode>('light')

  React.useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as Mode | null
    if (savedMode) {
      setMode(savedMode)
    }
    if (typeof window !== 'undefined' && !savedMode) {
      const isDark = window.matchMedia?.('(prefers-color-scheme: dark)')
      if (isDark) setMode('dark')
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('theme-mode', mode)
    const bg = themes[mode].palette.background.default
    document.body.style.background = bg
  }, [mode])

  return (
    <Context.Provider value={{ setMode, mode }}>
      <MuiThemeProvider theme={themes[mode]}>{children}</MuiThemeProvider>
    </Context.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(Context)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
