import { Box } from '@mui/material'

import { Role } from 'components/role'
import { Section } from 'components/section'

import { roles } from '../../constants'

export const Experience = () => (
  <Section mt={8} pt={10} title='Experience'>
    <Box sx={{ mt: 8 }}>
      {roles.map((role) => (
        <Role key={role.company} {...role} />
      ))}
    </Box>
  </Section>
)
