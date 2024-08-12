'use client'

import { SwipeRounded } from '@mui/icons-material'
import { Box, BoxProps, ListProps } from '@mui/material'
import React from 'react'

import { ClickIndicator, List, SwipeIndicator } from './styles'

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
      >
        {children}
      </List>
      <ClickIndicator color='text.secondary' variant='body2'>
        <SwipeRounded /> Click and drag to scroll through.
      </ClickIndicator>
      <SwipeIndicator color='text.secondary' variant='body2'>
        <SwipeRounded /> Swipe to scroll through.
      </SwipeIndicator>
    </Box>
  )
}
