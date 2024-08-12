import { ArrowRightAltRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

type LinkButtonProps = React.PropsWithChildren<{
  href: string
  startIcon?: React.ReactNode
}>

export const LinkButton = (props: LinkButtonProps) => (
  <Button
    color='inherit'
    endIcon={<ArrowRightAltRounded />}
    rel='noreferrer noopener'
    sx={{
      fontWeight: 'bold',
      transition: 'all .5s',
      '& .MuiButton-endIcon': {
        width: '0px',
        overflow: 'hidden',
        transition: 'width .5s',
      },
      '&:hover': {
        color: '#009DFF',
        '& .MuiButton-endIcon': { width: '20px' },
      },
    }}
    target='_blank'
    variant='text'
    {...props}
  />
)
