import { GitHub, LinkedIn, MailRounded } from '@mui/icons-material'
import { Box, Button, Tooltip } from '@mui/material'

const icons = [
  {
    name: 'Email',
    component: <MailRounded />,
    href: 'mailto:hello@seanhewitson.com',
  },
  {
    name: 'GitHub',
    component: <GitHub />,
    href: 'https://github.com/seannhewitson',
  },
  {
    name: 'LinkedIn',
    component: <LinkedIn />,
    href: 'https://uk.linkedin.com/in/sean-hewitson-4375101b0',
  },
]

export const Socials = () => (
  <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
    {/* Social media icons/links would go here */}
    {icons.map((icon) => (
      <Tooltip key={icon.name} title={icon.name} arrow>
        <Button
          component='a'
          href={icon.href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={icon.name}
          sx={{
            color: 'text.secondary',
            borderRadius: 3,
            width: 36,
            height: 36,
            minWidth: 'auto',
            '&:hover': {
              bgcolor: 'text.primary',
              color: 'background.default',
            },
          }}
          variant='text'
        >
          {icon.component}
        </Button>
      </Tooltip>
    ))}
  </Box>
)
