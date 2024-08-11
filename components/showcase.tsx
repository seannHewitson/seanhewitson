'use client'

import { Box, Typography } from '@mui/material'

import { Comment } from './styles'

export const Showcase = () => (
  <Box>
    <Comment>Showcase Sean</Comment>
    <Typography
      sx={{ fontSize: '1.5rem', textAlign: 'justify', mb: 2 }}
      variant='subtitle1'
    >
      Here are some of the recent projects I have worked on over the past year.
    </Typography>
  </Box>
)
