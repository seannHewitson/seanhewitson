'use client'

import { EmailRounded, LinkedIn } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { LinkButton } from './linkButton'
import { Comment } from './styles'

export const Contact = () => (
  <Box>
    <Comment>How to contact me</Comment>
    <Typography
      sx={{ fontSize: '1.25rem', textAlign: 'justify', mb: 2 }}
      variant='subtitle1'
    >
      I am not an active social media user, so you can contact me by any of the
      following;
      <br />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <LinkButton
          href='mailto:seannhewitson@icloud.com'
          startIcon={<EmailRounded />}
        >
          Email
        </LinkButton>
        <LinkButton
          href='https://www.linkedin.com/in/sean-hewitson-4375101b0'
          startIcon={<LinkedIn />}
        >
          LinkedIn
        </LinkButton>
      </Box>
    </Typography>
  </Box>
)
