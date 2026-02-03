'use client'

import { KeyboardArrowDownRounded } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import React from 'react'

import { useTheme } from 'context/theme'

import { technologies } from './technologies'

export type RoleProps = {
  company: string
  description: string[]
  end?: number
  start: number
  technologies?: (keyof typeof technologies)[]
  title: string
}

export const Role: React.FC<RoleProps> = ({
  company,
  description,
  end,
  start,
  title,
  technologies: stack,
}) => {
  const [open, setOpen] = React.useState(false)
  const { mode } = useTheme()

  return (
    <Box
      sx={{
        mb: 5,
        pl: 4,
        py: 1,
        borderLeft: ({ palette }) => `2px solid ${palette.divider}`,
        transition: 'border-color 0.3s ease-in-out',
        '&:hover': {
          borderColor: ({ palette }) => palette.primary.main,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography
          variant='body1'
          color='textPrimary'
          fontSize='1.05rem'
          fontWeight={600}
          letterSpacing='-0.01em'
        >
          {title}
        </Typography>
        <Chip
          color='default'
          label={`${start} - ${end ?? 'Present'}`}
          sx={{
            color: ({ palette }) => palette.text.secondary,
            background: ({ palette }) => palette.action.disabledBackground,
            borderRadius: 1,
          }}
        />
      </Box>
      <Typography variant='body2' color='textSecondary' fontWeight={500} mb={2}>
        {company}
      </Typography>
      <Box
        component='ul'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          listStyle: 'none',
          pl: 2,
        }}
      >
        {description.map((item, index) => (
          <Box
            component='li'
            key={index}
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: -12,
                top: '0.6em',
                width: 6,
                height: '1px',
                backgroundColor: 'primary.main',
                borderRadius: '50%',
              },
            }}
          >
            <Typography variant='body2' color='textSecondary' fontWeight={400}>
              {item}
            </Typography>
          </Box>
        ))}

        <Accordion
          sx={{ bgcolor: 'transparent', boxShadow: 'none', mt: 2 }}
          onChange={(e, isOpen) => setOpen(isOpen)}
        >
          <AccordionSummary
            expandIcon={
              <KeyboardArrowDownRounded sx={{ color: 'text.secondary' }} />
            }
            aria-controls={`panel-${company}-content`}
            id={`panel-${company}-header`}
            sx={{
              bgcolor: ({ palette }) => `${palette.primary.main}10`,
              minHeight: '40px !important',
              border: ({ palette }) => `1px solid ${palette.divider}CA`,
              borderRadius: 2,
              color: 'text.secondary',
              transition: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
              ...(open
                ? {
                    bgcolor: ({ palette }) => `${palette.primary.main}CF`,
                    color: 'white',
                    '& .MuiAccordionSummary-expandIconWrapper > svg': {
                      color: 'white',
                    },
                  }
                : {}),
              '&:hover': {
                bgcolor: ({ palette }) => `${palette.primary.main}CF`,
                color: 'white',
                '& .MuiAccordionSummary-expandIconWrapper > svg': {
                  color: 'white',
                },
              },
              '& .MuiAccordionSummary-content': {
                my: 0,
              },
            }}
          >
            <Typography variant='body2' fontWeight={500}>
              Technologies
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              transition: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
              background: ({ palette }) => mode === 'light' ? 'white' : `${palette.text.secondary}C0`,
              border: ({ palette }) => `1px solid ${palette.divider}`,
              borderRadius: 2,
              mt: 1,
            }}
          >
            <Stack direction='row' flexWrap='wrap' sx={{ px: 2.5, pt: 2 }}>
              {stack?.map((name: keyof typeof technologies, index) => (
                  <Tooltip key={index} title={name} arrow>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 40,
                        mr: 4,
                        mb: 3,
                      }}
                    >
                      {technologies[name] ?? name}
                    </Box>
                  </Tooltip>
                )
              )}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
