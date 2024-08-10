import { StarRounded } from '@mui/icons-material'
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material'
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
      with ease. I&apos;m comfortable using whatever is best suited for the
      task.
    </Typography>
    <Grid container>
      {Object.entries(skills).map(([set, skills]) => (
        <Grid item key={set} md={4} sm={6} sx={{ padding: '1rem' }} xs={12}>
          <Typography variant='h4'>
            {set.charAt(0).toUpperCase() + set.slice(1)}
          </Typography>
          <List>
            {skills.map(({ favourite, icon, name }) => (
              <ListItem key={name}>
                {icon && (
                  <ListItemIcon sx={{ minWidth: 'unset', mr: 1 }}>
                    <Image alt={name} height='20' src={`/${icon}`} width='20' />
                  </ListItemIcon>
                )}
                <ItemText>
                  {name}
                  {favourite && <StarRounded style={{ color: '#FBB13C' }} />}
                </ItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  </Box>
)
