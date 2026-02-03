import { Typography } from '@mui/material'

const details = ['📍 Plymouth, UK', '🌐 Remote']

export const Details = () => (
  <>
    {details.map((detail) => (
      <Typography
        color='textSecondary'
        variant='body2'
        key={detail}
        sx={{
          display: 'inline-block',
          fontWeight: 500,
          fontSize: 13,
        }}
      >
        {detail}
      </Typography>
    ))}
  </>
)
