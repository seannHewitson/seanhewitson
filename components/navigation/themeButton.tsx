import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { useTheme } from 'context/theme'

export const ThemeButton = () => {
  const { mode, setMode } = useTheme()

  return (
    <IconButton
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      sx={{
        borderRadius: 4,
        color: ({ palette }) =>
          mode === 'light' ? palette.text.primary : palette.text.secondary,
      }}
    >
      {mode === 'light' ? <LightModeRounded /> : <DarkModeRounded />}
    </IconButton>
  )
}
