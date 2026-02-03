import { Box } from '@mui/material'

import { Details } from './details'
import { Socials } from './socials'
import { Status } from './status'
import { ThemeButton } from './themeButton'

export const Desktop = () => (
  <Box
    sx={{
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      width: '100%',
    }}
  >
    <Socials />
    <Status />
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
)
