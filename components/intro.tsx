'use client'

import { GitHub, Male, PlaceRounded } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'

import { Comment } from './styles'

export const Intro = () => (
  <Box>
    <Comment>Introduction</Comment>
    <Typography sx={{ mb: 4 }} variant='h4'>
      Hey 👋, I&apos;m Sean.
    </Typography>
    <Typography
      sx={{ fontSize: '1.5rem', textAlign: 'justify', mb: 4 }}
      variant='subtitle1'
    >
      I&apos;m a{' '}
      <Typography
        color='#009DFF'
        component='strong'
        fontSize='inherit'
        fontWeight='bold'
      >
        Full-Stack developer
      </Typography>{' '}
      and{' '}
      <Typography
        color='#009DFF'
        component='strong'
        fontSize='inherit'
        fontWeight='bold'
      >
        Hobby Coder
      </Typography>{' '}
      with over 5 years of experience working in tech. Senior Software Engineer
      at{' '}
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
    </Typography>
    <Typography
      sx={{ fontSize: '1.5rem', textAlign: 'justify', mb: 4 }}
      variant='subtitle2'
    >
      I am currently{' '}
      <Typography
        color='#009DFF'
        component='strong'
        fontSize='inherit'
        fontWeight='bold'
      >
        open to new opportunities
      </Typography>{' '}
      and looking to work with a team that values collaboration and growth.
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Typography
        component='div'
        sx={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '1.5rem',
          gap: 1,
        }}
      >
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
      </Typography>
      <Typography
        component='div'
        sx={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '1.5rem',
          gap: 1,
        }}
      >
        <Male />
        He/Him
      </Typography>
      <Typography
        component='div'
        sx={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '1.5rem',
          gap: 1,
        }}
      >
        <PlaceRounded />
        United Kingdom
      </Typography>
    </Box>
  </Box>
)
