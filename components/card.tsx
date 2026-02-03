'use client'

import {
  Box,
  CardContent,
  Card as MuiCard,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'

type Props = {
  icon: React.ReactNode
  index: number
  title: string
  description: string
}

export const Card: React.FC<Props> = ({ description, icon, index, title }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <MuiCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        p: '.75rem .5rem',
        height: '100%',
        boxShadow: 'unset',
        border: ({ palette }) => `1px solid ${palette.divider}`,
        borderRadius: 3,
        py: 3,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: ({ palette }) => `0 2px 5px ${palette.divider}`,
          transform: 'translateY(-4px) scale(1.02)',
        },
      }}
    >
      <CardContent sx={{ p: '0 1rem' }}>
        <Stack spacing={2}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
            }}
          >
            <Typography
              color='primary'
              variant='h6'
              sx={{ fontSize: 35, lineHeight: 0.5, ml: -1 }}
            >
              {icon}
            </Typography>
            <Typography
              color='primary'
              variant='h6'
              sx={{ fontFamily: 'monospace' }}
            >
              {`#${(index + 1).toString().padStart(3, '0')}.`}
            </Typography>
          </Box>
          <Typography
            color='textPrimary'
            fontSize='1.1rem'
            fontWeight={600}
            variant='h4'
          >
            {title}
          </Typography>
          <Typography color='textSecondary' variant='body2'>
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </MuiCard>
  )
}
