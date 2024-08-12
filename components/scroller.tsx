'use client'

import { SwipeRounded } from '@mui/icons-material'
import { Box, BoxProps, List, ListProps, Typography } from '@mui/material'
import React from 'react'

type ScrollerProps = BoxProps & {
  ListProps?: ListProps
}

export const Scroller = ({ ListProps, children, ...rest }: ScrollerProps) => {
  const [pressed, setPressed] = React.useState(false)
  const [scroll, setScroll] = React.useState<number>()
  const [start, setStart] = React.useState<number>()
  const scroller = React.createRef<HTMLUListElement>()

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scroller.current) {
      setScroll(scroller.current.scrollLeft)
      setStart(e.pageX - scroller.current.offsetLeft)
      setPressed(true)
    }
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!pressed || !scroller.current) return
    setPressed(false)
    if (e.pageX - scroller.current.offsetLeft === start) {
      //  @ts-ignore
      e.target.children?.[0]?.click()
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (
      !pressed ||
      !scroller.current ||
      start === undefined ||
      scroll === undefined
    )
      return
    e.preventDefault()
    const x = e.pageX - scroller.current.offsetLeft
    const walk = (x - start!) * 3
    scroller.current.scrollLeft = scroll! - walk
  }

  return (
    <Box {...rest}>
      <List
        {...ListProps}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={scroller}
        sx={{
          maxWidth: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          gap: 2,
          position: 'relative',
          ...ListProps?.sx,
        }}
      >
        {children}
      </List>
      <Typography
        color='text.secondary'
        sx={{
          mt: 2,
          fontStyle: 'italic',
          '@media (pointer:none), (pointer:coarse)': {
            display: 'none',
          },
        }}
        variant='body2'
      >
        <SwipeRounded /> Click and drag to scroll through.
      </Typography>
      <Typography
        color='text.secondary'
        sx={{
          display: 'none',
          mt: 2,
          fontStyle: 'italic',
          '@media (pointer:none), (pointer:coarse)': {
            display: 'block',
          },
        }}
        variant='body2'
      >
        <SwipeRounded /> Swipe to scroll through.
      </Typography>
    </Box>
  )
}
