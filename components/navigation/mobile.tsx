import { Box } from '@mui/material'

import { Details } from './details'
import { Socials } from './socials'
import { Status } from './status'
import { ThemeButton } from './themeButton'

export const Mobile = () => (
  <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Socials />
      <Status />
    </Box>
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', mt: 1 }}>
      <Box
        sx={{
          flex: 1,
          gap: 3.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Details />
        <ThemeButton />
      </Box>
    </Box>
  </Box>
)
