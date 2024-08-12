import { Box, Typography, styled } from '@mui/material'

export const FooterContainer = styled(Box)({
  alignItems: 'center',
  backdropFilter: 'blur(16px) saturate(360%)',
  boxShadow: 'inset 0px 0px .5em black',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  justifyContent: 'center',
  padding: '1.5rem',
  width: '100%',
})

export const Body = styled(Typography)({ marginLeft: '1rem' })
