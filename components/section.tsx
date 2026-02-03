import { Box, BoxProps, Divider, Typography } from '@mui/material'

type Props = Omit<BoxProps, 'component'> & {
  title?: string
}

export const Section: React.FC<Props> = ({ children, title, sx, ...rest }) => (
  <Box component='section' sx={{ px: 4, pt: 8, ...sx }} {...rest}>
    {title && (
      <>
        <Typography
          color='textPrimary'
          fontSize='1.25rem'
          fontWeight={700}
          mb={2}
          variant='h3'
        >
          {title}
        </Typography>
        <Divider sx={{ mt: 0 }} />
      </>
    )}
    {children}
  </Box>
)
