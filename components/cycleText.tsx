'use client'

import { Box, Typography } from '@mui/material'
import React from 'react'

const texts = [
  "Hello, I'm",
  'Hola, soy',
  'Bonjour, je suis',
  'Hallo, ich bin',
  'Ciao, sono',
]

export const CycleText = () => {
  const [animate, setAnimate] = React.useState(false)
  const [index, setIndex] = React.useState(0)
  const current = texts[index]
  const next = texts[(index + 1) % texts.length]

  React.useEffect(() => {
    const cycleInterval = setInterval(() => {
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
        setIndex((prev) => (prev + 1) % texts.length)
      }, 500)
    }, 3000)
    return () => clearInterval(cycleInterval)
  }, [])

  return (
    <Box sx={{ position: 'relative', display: 'inline-block', mb: 1 }}>
      <Typography
        sx={{
          fontSize: 'inherit',
          fontWeight: 'inherit',
          color: 'transparent',
          minWidth: 200,
        }}
        variant='body1'
      >
        {current}
      </Typography>
      {/* Animated current */}
      <Typography
        component='div'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: 'inherit',
          fontWeight: 'inherit',
          color: 'text.secondary',
          opacity: 1,
          transform: 'translateY(0)',
          ...(animate
            ? {
                animation: 'slideUpFadeOut 0.5s forwards',
              }
            : {}),
          // animation: 'slideUpFadeOut 0.5s forwards',
          // animationDelay: '2.5s',
          width: '100%',
        }}
        variant='body1'
      >
        {current}
      </Typography>
      {/* Animated next */}
      <Typography
        component='div'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: 'inherit',
          fontWeight: 'inherit',
          color: 'text.secondary',
          transform: 'translateY(1em)',
          opacity: 0,
          ...(animate
            ? {
                animation: 'slideUpFadeIn 0.5s forwards',
              }
            : {}),
          // animation: 'slideUpFadeIn 0.5s forwards',
          // animationDelay: '2.5s',
          width: '100%',
        }}
        variant='body1'
      >
        {next}
      </Typography>
    </Box>
  )
}
