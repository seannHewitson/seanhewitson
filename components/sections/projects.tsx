import { Box, Divider, Grid, Typography } from '@mui/material'

import { Card } from 'components/card'
import { Section } from 'components/section'

const projects = [
  {
    description: 'Website to track and discover tv shows.',
    icon: '📺',
    title: 'Bixo',
  },
  {
    description: 'Competition/Giveaway platform.',
    icon: '🏆',
    title: 'LootLink',
  },
]

export const Projects = () => (
  <Section title='Projects'>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {projects.map((project, index) => (
        <Grid key={project.title} size={{ xs: 12, md: 6 }}>
          <Card index={index} {...project} />
        </Grid>
      ))}
    </Grid>
  </Section>
)
