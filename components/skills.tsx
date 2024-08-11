'use client'

import { StarRounded } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import Image from 'next/image'

import { skills } from './constants'
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
        <Box sx={{ position: 'relative', height: 100, maxWidth: '90vw' }}>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '100vw', sm: 'calc(100vw - 400px)' },
              left: { xs: '-9vw', sm: -400 },
              px: { xs: '9vw', sm: '400px' },
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <List sx={{ mt: 2 }}>
              {skills.map(({ favourite, icon, name }) => (
                <ListItem
                  key={name}
                  sx={{
                    display: 'inline-block',
                    width: 'unset',
                    textAlign: 'center',
                    '&:last-child': { mr: { xs: '9vw', sm: '300px' } },
                  }}
                >
                  {icon && (
                    <ListItemIcon
                      sx={{ minWidth: 'unset', mr: 1, position: 'relative' }}
                    >
                      <Image
                        alt={name}
                        height='40'
                        src={`/${icon}`}
                        width='40'
                      />
                      {favourite && (
                        <StarRounded
                          style={{
                            color: '#FBB13C',
                            position: 'absolute',
                            top: -10,
                            left: 25,
                          }}
                        />
                      )}
                    </ListItemIcon>
                  )}
                  <ItemText>{name}</ItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
)
