import { Box, Divider, Grid, Typography } from '@mui/material'

import { Card } from 'components/card'
import { Section } from 'components/section'

const packages = [
  {
    description:
      'React forms with optional auto validation on both CSR and SSR using MUI and Zod.',
    icon: '📦',
    title: '@odyssoft/zod-mui-forms',
  },
  {
    description:
      'Mongoose style Type-safe ORM/query builder for MySQL, TypeScript & Node.js.',
    icon: '📦',
    title: '@odyssoft/tsorm (unmaintained)',
  },
  {
    description:
      'The Movie Database (TMDb) API client for Node.js and the browser.',
    icon: '📦',
    title: '@odyssoft/tmdb',
  },
]

export const Packages = () => (
  <Section title='Packages'>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {packages.map((packageItem, index) => (
        <Grid key={packageItem.title} size={{ xs: 12, md: 6 }}>
          <Card index={index} {...packageItem} />
        </Grid>
      ))}
    </Grid>
  </Section>
)
