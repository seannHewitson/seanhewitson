'use client'

import { ArrowRightAltRounded, LanguageRounded } from '@mui/icons-material'
import { Box, Button, List, Typography } from '@mui/material'

import { Project as ProjectProps } from './constants'
import { ReadMore } from './readmore'
import { Skill } from './skill'

export const Project = ({
  description,
  images,
  name,
  obstacles,
  stack,
  url,
}: ProjectProps) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '.5rem',
      width: '100%',
      p: 2,
      boxShadow: 'inset 0px 0px .25em black',
      backdropFilter: 'blur(16px) saturate(360%)',
    }}
  >
    <Box>
      <Button
        color='inherit'
        endIcon={<ArrowRightAltRounded />}
        href={url}
        startIcon={<LanguageRounded />}
        sx={{
          fontWeight: 'bold',
          transition: 'all .5s',
          '& .MuiButton-endIcon': {
            width: '0px',
            overflow: 'hidden',
            transition: 'width .5s',
          },
          '&:hover': {
            color: '#009DFF',
            '& .MuiButton-endIcon': { width: '20px' },
          },
        }}
        variant='text'
      >
        {name}
      </Button>
      <ReadMore
        content={description}
        sx={{ textAlign: 'justify' }}
        variant='body1'
      />
      <Box>
        <Typography
          sx={{ fontWeight: 'bold', mt: 2, textDecoration: 'underline' }}
          variant='subtitle1'
        >
          Tech Stack:
        </Typography>
        <List
          sx={{
            maxWidth: '100%',
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {stack.map((tech) => (
            <Skill key={tech.name} fontSize='.75rem' size={20} {...tech} />
          ))}
        </List>
      </Box>
      <Box>
        <Typography
          sx={{
            color: '#FF6D6D',
            fontWeight: 'bold',
            mt: 2,
            mb: 1,
            textDecoration: 'underline',
          }}
          variant='subtitle1'
        >
          Obstacles:
        </Typography>
        {obstacles.map(({ area, description }) => (
          <Box sx={{ textAlign: 'justify', mb: 2 }}>
            <Typography key={area} sx={{ fontWeight: 'bold' }} variant='body1'>
              {area}:
            </Typography>
            <ReadMore
              content={description}
              sx={{ textAlign: 'justify', px: 2 }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
)
