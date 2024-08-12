'use client'

import { Box, Typography } from '@mui/material'

import { skills } from './constants'
import { Scroller } from './scroller'
import { Skill } from './skill'
import { Comment } from './styles'

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
      <Box
        key={set}
        sx={{
          p: 2,
          backdropFilter: 'blur(5px) saturate(360%)',
          borderRadius: '5px',
          boxShadow: 'inset 0px 0px .25em black',
          mb: 4,
        }}
      >
        <Typography
          sx={{ textAlign: 'center', textDecoration: 'underline' }}
          variant='h4'
        >
          {set.charAt(0).toUpperCase() + set.slice(1)}
        </Typography>
        <Scroller ListProps={{ sx: { textAlign: 'center' } }} sx={{ mt: 2 }}>
          {skills.map((skill) => (
            <Skill key={skill.name} scrollable={skills.length > 9} {...skill} />
          ))}
        </Scroller>
      </Box>
    ))}
  </Box>
)
