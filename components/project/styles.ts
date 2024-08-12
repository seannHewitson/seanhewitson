import { Box, Typography, styled } from '@mui/material'

export const Bold = styled(Typography)({ fontWeight: 'bold' })

export const Obstacle = styled(Box)({
  marginBottom: '1rem',
  textAlign: 'justify',
})

export const ProjectContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '.5rem',
  width: '100%',
  padding: '1rem',
  boxShadow: 'inset 0px 0px .25em black',
  backdropFilter: 'blur(16px) saturate(360%)',
})

export const Subtitle = styled(Typography)({
  fontWeight: 'bold',
  marginTop: '1rem',
  textDecoration: 'underline',
})

export const Subtitle2 = styled(Typography)({
  color: '#FF6D6D',
  fontWeight: 'bold',
  marginBottom: '.5rem',
  marginTop: '1rem',
  textDecoration: 'underline',
})
