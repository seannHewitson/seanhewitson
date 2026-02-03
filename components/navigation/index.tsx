'use client'

import { AppBar, Toolbar } from '@mui/material'

import { Desktop } from './desktop'
import { Mobile } from './mobile'

export const Navigation = () => (
  <AppBar
    position='sticky'
    sx={{
      backdropFilter: 'blur(10px)',
      top: 0,
      left: 0,
      bgcolor: ({ palette }) => palette.background.default,
      backgroundImage: 'none',
      boxShadow: 'none',
      borderBottom: ({ palette }) => `1px solid ${palette.divider}`,
      height: { xs: 100, md: 50 },
      padding: '12px 16px',
    }}
  >
    <Toolbar sx={{ minHeight: '100% !important', p: '0 !important' }}>
      <Mobile />
      <Desktop />
    </Toolbar>
  </AppBar>
)
