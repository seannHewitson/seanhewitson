import { Box, Link, Typography } from '@mui/material'

export const Footer = () => (
  <Box component='footer' sx={{ textAlign: 'center', py: 3, mt: 'auto' }}>
    <Link
      href='mailto:hello@seanhewitson.com'
      underline='hover'
      color='primary'
    >
      hello@seanhewitson.com
    </Link>
    <Typography variant='body2' color='textSecondary' mt={1}>
      © {new Date().getFullYear()} Sean Hewitson.
    </Typography>
  </Box>
)
