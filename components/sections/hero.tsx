import { Box, Typography } from '@mui/material'

import { Section } from 'components/section'

import { CycleText } from '../cycleText'

export const Hero = () => (
  <Section sx={{ minHeight: '40vh', pt: 5 }}>
    <CycleText />
    <Typography color='textPrimary' mb={2} variant='h1'>
      Sean Hewitson
    </Typography>
    <Typography color='textSecondary' mb={5} fontWeight='400' variant='h5'>
      Senior Software Engineer
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography
        color='textSecondary'
        fontSize='1.125rem'
        fontWeight='400'
        variant='body1'
      >
        Self taught Full-stack developer
      </Typography>
      <Typography
        color='textSecondary'
        fontSize='1.125rem'
        fontWeight='400'
        variant='body1'
      >
        7+ years of experience in building scalable web applications and
        <br />
        services using modern technologies.
      </Typography>
    </Box>
  </Section>
)
