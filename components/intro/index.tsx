'use client'

import { GitHub, Male, PlaceRounded } from '@mui/icons-material'
import { Box, Link } from '@mui/material'

import { Comment } from '../styles'
import { ColouredText, Info, InfoContainer, Subtitle, Title } from './styles'

export const Intro = () => (
  <Box>
    <Comment>Introduction</Comment>
    <Title variant='h4'>Hey 👋, I&apos;m Sean.</Title>
    <Subtitle variant='subtitle1'>
      I&apos;m a <ColouredText>Full-Stack developer</ColouredText> and{' '}
      <ColouredText>Hobby Coder</ColouredText> with over 5 years of experience
      working in tech. Senior Software Engineer at{' '}
      <Link
        href='https://rosearcheducation.com'
        rel='noreferrer noopener'
        target='_blank'
      >
        Rose Arch Education
      </Link>
      /
      <Link
        href='https://thinkingmatters.com'
        rel='noreferrer noopener'
        target='_blank'
      >
        Thinking Matters
      </Link>
      , creating and managing the user facing applications and services.
    </Subtitle>
    <Subtitle variant='subtitle2'>
      I am currently <ColouredText>open to new opportunities</ColouredText> and
      looking to work with a team that values collaboration and growth.
    </Subtitle>
    <InfoContainer>
      <Info>
        <GitHub />
        <Link
          href='https://github.com/seannhewitson'
          rel='noreferrer noopener'
          target='_blank'
          underline='always'
        >
          SeannHewitson
        </Link>
        /
        <Link
          href='https://github.com/odyssoft'
          rel='noreferrer noopener'
          target='_blank'
          underline='always'
        >
          Odyssoft
        </Link>
      </Info>
      <Info>
        <PlaceRounded />
        United Kingdom
      </Info>
    </InfoContainer>
  </Box>
)
