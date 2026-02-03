'use client'

import { Box, Typography } from '@mui/material'
import React from 'react'

import { getCharacterWidths } from './helper'

export const TransitionText = () => {
  const timeout = React.useRef<number>(null)
  const interval = React.useRef<number>(null)
  const [index, setIndex] = React.useState(0)
  const [charIndex, setCharIndex] = React.useState(0)
  const texts = ['Hello, World!', 'Welcome to My Site', 'Enjoy Your Stay']

  const current = texts[index]
  const next = texts[(index + 1) % texts.length]

  const widths = getCharacterWidths('1rem')
  const left = React.useMemo(() => {
    const positions: string[] = []
    let cumulative = 0
    for (let i = 0; i < current.length; i++) {
      positions.push(`${cumulative}px`)
      cumulative += widths[current[i]]
    }
    return positions
  }, [current, widths])

  const begin = React.useCallback(() => {
    timeout.current = window.setTimeout(() => {
      interval.current = window.setInterval(() => {
        setCharIndex((prev) => {
          if (prev < Math.max(current.length, next.length)) {
            return prev + 1
          } else {
            setIndex((i) => (i + 1) % texts.length)
            return 0
          }
        })
      }, 200)
    }, 2000)
  }, [current, next, texts.length])

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    // Wait 2 seconds before we start the animation.
    timeout.current = window.setTimeout(() => {
      // Start the character transition interval.
      interval.current = window.setInterval(() => {
        setCharIndex((prev) => {
          if (prev < Math.max(current.length, next.length)) {
            return prev + 1
          } else {
            setIndex((i) => (i + 1) % texts.length)
            // Clear interval and restart after delay
            if (interval.current) {
              clearInterval(interval.current)
            }
            return 0
          }
        })
      }, 200)
    }, 2000)

    return () => {
      if (timeout.current) clearTimeout(timeout.current)
      if (interval.current) clearInterval(interval.current)
    }
  }, [current, next, texts.length])

  // React.useEffect(() => {
  //   timeout = window.setTimeout(() => {
  //     interval = window.setInterval(() => {
  //       setCharIndex((prev) => {
  //         if (prev < Math.max(current.length, next.length)) {
  //           return prev + 1
  //         } else {
  //           setIndex((i) => (i + 1) % texts.length)
  //           return 0
  //         }
  //       })
  //     }, 200)
  //   }, 2000)

  //   return () => clearInterval(interval)
  // }, [current, next, texts.length])

  return (
    <Box>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        Current Text:
      </Typography>
      <Box sx={{ display: 'flex', fontWeight: 'bold', position: 'relative' }}>
        {Array.from({ length: Math.max(current.length, next.length) }).map(
          (_, i) => {
            const currChar = current[i]
            const nextChar = next[i]
            const isChanging = i < charIndex
            return (
              <Typography
                key={i}
                component='span'
                sx={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  width: widths[currChar],
                  position: 'relative',
                  // left: left[i] || '0px',
                  transform: isChanging ? 'translateY(-100%)' : 'translateY(0)',
                  opacity: isChanging ? 0 : 1,
                }}
              >
                {isChanging ? nextChar : currChar}
              </Typography>
            )
          }
        )}
        {Array.from({ length: Math.max(current.length, next.length) }).map(
          (_, i) => {
            const nextChar = next[i]
            const isChanging = i < charIndex
            return (
              <Typography
                key={`next-${i}`}
                component='span'
                sx={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  width: widths[nextChar],
                  position: 'absolute',
                  top: 0,
                  left: left[i] || '0px',
                  transform: isChanging ? 'translateY(0)' : 'translateY(100%)',
                  opacity: isChanging ? 1 : 0,
                }}
              >
                {nextChar}
              </Typography>
            )
          }
        )}
      </Box>
      <Typography variant='body1' sx={{ margin: '1rem 0' }}>
        All Texts:
      </Typography>

      <Box sx={{ display: 'flex', gap: '1rem' }}>
        {texts.map((text, idx) => (
          <Typography
            key={idx}
            variant='body2'
            sx={{
              padding: '0.5rem 1rem',
              backgroundColor: idx === index ? 'primary.main' : 'grey.300',
              color: idx === index ? 'primary.contrastText' : 'text.primary',
              borderRadius: '4px',
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
