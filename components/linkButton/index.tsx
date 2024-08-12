import { ArrowRightAltRounded } from '@mui/icons-material'
import React from 'react'

import { Button } from './styles'

type LinkButtonProps = React.PropsWithChildren<{
  href: string
  startIcon?: React.ReactNode
}>

export const LinkButton = (props: LinkButtonProps) => (
  <Button
    color='inherit'
    endIcon={<ArrowRightAltRounded />}
    // @ts-ignore
    target='_blank'
    variant='text'
    {...props}
  />
)
