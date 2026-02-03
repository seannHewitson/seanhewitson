'use client'

import { ThemeOptions, createTheme } from '@mui/material'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const typography: ThemeOptions['typography'] = {
  fontFamily: outfit.style.fontFamily,
  allVariants: {
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  },
}

export const darkTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: '3.5rem',
            fontWeight: 700,
          },
        },
      ],
    },
  },
  palette: {
    mode: 'dark',
    divider: '#3f3f46',
    background: {
      default: '#19191E',
      paper: '#09090E',
    },
    success: {
      main: '#17C964',
      '100': '#16a34a',
    },
    text: {
      primary: '#009dff',
      secondary: '#94a3b8',
    },
  },
  typography,
})

export const lightTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: '3.5rem',
            fontWeight: 700,
          },
        },
      ],
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#f8f9fa',
      paper: '#FFFFFF',
    },
    divider: '#e2e8f0',
    success: {
      main: '#17C964',
      '100': '#16a34a',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
  },
  typography,
})

export const theme = createTheme({})
