import { Box, Typography, styled } from '@mui/material'

export const ColouredText = styled('span')({
  color: '#009DFF',
  fontSize: 'inherit',
  fontWeight: 'bold',
})

export const Info = styled(Typography)({
  alignItems: 'center',
  display: 'flex',
  fontSize: '1.5rem',
  gap: '.5rem',
})

export const InfoContainer = styled(Box)({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
})

export const Subtitle = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '2rem',
  textAlign: 'justify',
})

export const Title = styled(Typography)({ marginBottom: '2rem' })
