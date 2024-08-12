import { Box, Typography, styled } from '@mui/material'

export const SkillContainer = styled(Box)({
  backdropFilter: 'blur(5px) saturate(360%)',
  borderRadius: '5px',
  boxShadow: 'inset 0px 0px .25em black',
  marginBottom: '2rem',
  padding: '1rem',
})

export const SkillText = styled(Typography)({
  textAlign: 'center',
  textDecoration: 'underline',
})

export const SkillsContainer = styled(Box)({ marginTop: '4rem' })

export const Subtitle = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '1rem',
  textAlign: 'justify',
})
