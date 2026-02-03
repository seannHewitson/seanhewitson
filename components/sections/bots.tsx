import { Grid } from '@mui/material'

import { Card } from 'components/card'
import { Section } from 'components/section'

const bots = [
  {
    description: 'Discord bot for managing giveaways and competitions.',
    icon: '🏆',
    title: 'LootLink Bot',
  },
  {
    description:
      'Discord bot for Call of Duty Warzone tournaments, utilizing ai.',
    icon: '🎮',
    title: 'Warzone Bot',
  },
  {
    description: 'Discord bot for private dart tournaments and leagues.',
    icon: '🎯',
    title: 'Dart Bot',
  },
]

export const Bots = () => (
  <Section title='Bots'>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {bots.map((bot, index) => (
        <Grid key={bot.title} size={{ xs: 12, md: 6 }}>
          <Card index={index} {...bot} />
        </Grid>
      ))}
    </Grid>
  </Section>
)
