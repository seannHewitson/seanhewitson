'use client'

import { StarRounded } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import Image from 'next/image'

import { skills } from './constants'
import { Skill } from './skill'
import { Comment, ItemText } from './styles'

export const Skills = () => (
  <Box sx={{ mt: 8 }}>
    <Comment>The skills I have acquired</Comment>
    <Typography
      sx={{ fontSize: '1.5rem', textAlign: 'justify', mb: 2 }}
      variant='subtitle1'
    >
      I am language agnostic, so picking up new languages and frameworks comes
      with ease. I&apos;m comfortable using whichever stack is best suited for
      the task.
    </Typography>
    {Object.entries(skills).map(([set, skills]) => (
      <Box key={set} sx={{ p: 2 }}>
        <Typography
          sx={{ textAlign: 'center', textDecoration: 'underline' }}
          variant='h4'
        >
          {set.charAt(0).toUpperCase() + set.slice(1)}
        </Typography>
        <Box sx={{ height: 100, maxWidth: '90vw' }}>
          <Box
            sx={{
              position: 'absolute',
              width: '100vw',
              left: 0,
              px: { xs: '9vw', sm: '400px' },
              pb: 2,
              pr: '400px',
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
          >
            <List sx={{ mt: 2 }}>
              {skills.map((skill) => (
                <Skill
                  key={skill.name}
                  scrollable={skills.length > 9}
                  {...skill}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
)
