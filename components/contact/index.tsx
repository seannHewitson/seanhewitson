'use client'

import { EmailRounded, LinkedIn } from '@mui/icons-material'
import { Box } from '@mui/material'

import { LinkButton } from '../linkButton'
import { Comment } from '../styles'
import { ButtonContainer, Subtitle } from './styles'

export const Contact = () => (
  <Box>
    <Comment>How you can contact me</Comment>
    <Subtitle variant='subtitle1'>
      I am not an active social media user, so you can contact me by any of the
      following;
      <br />
      <ButtonContainer>
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
      </ButtonContainer>
    </Subtitle>
  </Box>
)
