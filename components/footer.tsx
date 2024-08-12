'use client'

import { GitHub } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { LinkButton } from './linkButton'

export const Footer = () => (
  <Box
    component='footer'
    sx={{
      alignItems: 'center',
      backdropFilter: 'blur(16px) saturate(360%)',
      boxShadow: 'inset 0px 0px .5em black',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      justifyContent: 'center',
      p: 3,
      width: '100%',
    }}
  >
    <Typography variant='body1'>
      Built using <LinkButton href='https://mui.com'>MUI</LinkButton>, and{' '}
      <LinkButton href='https://nextjs.org'>Next.js</LinkButton>, deployed on{' '}
      <LinkButton href='https://vercel.com'>Vercel</LinkButton> | ©{' '}
      {new Date().getFullYear()} Sean Hewitson
    </Typography>
    <Typography sx={{ ml: 2 }} variant='body2'>
      Source available on{' '}
      <LinkButton
        href='https://github.com/seannhewitson/seanhewitson'
        startIcon={<GitHub />}
      >
        GitHub
      </LinkButton>
    </Typography>
  </Box>
)
