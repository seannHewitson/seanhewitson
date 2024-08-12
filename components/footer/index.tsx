'use client'

import { GitHub } from '@mui/icons-material'
import { Typography } from '@mui/material'

import { LinkButton } from '../linkButton'
import { Body, FooterContainer } from './styles'

export const Footer = () => (
  <FooterContainer component='footer'>
    <Typography variant='body1'>
      Built using <LinkButton href='https://mui.com'>MUI</LinkButton>, and{' '}
      <LinkButton href='https://nextjs.org'>Next.js</LinkButton>, deployed on{' '}
      <LinkButton href='https://vercel.com'>Vercel</LinkButton> | ©{' '}
      {new Date().getFullYear()} Sean Hewitson
    </Typography>
    <Body variant='body2'>
      Source available on{' '}
      <LinkButton
        href='https://github.com/seannhewitson/seanhewitson'
        startIcon={<GitHub />}
      >
        GitHub
      </LinkButton>
    </Body>
  </FooterContainer>
)
