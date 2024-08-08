'use client'

import { Shadows, createTheme } from '@mui/material/styles'

import { typography } from './typography'

const theme = createTheme({
  palette: {
    background: {
      paper: '#19191E',
    },
    divider: 'rgba(255, 215, 0, 0.15)',
    mode: 'dark',
    primary: { main: '#009DFF', light: '#009DFF80' },
  },
  shadows: Array(25).fill(
    '0 4px 6px -4px rgba(24, 39, 75, 0.16), 0px 8px 8px -4px rgba(24, 39, 75, 0.14)'
  ) as Shadows,
  shape: { borderRadius: 8 },
  typography,
})

export default theme
