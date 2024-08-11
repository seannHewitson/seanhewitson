import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

type ReadMoreProps = { content: string } & Omit<TypographyProps, 'children'>

export const ReadMore = ({ content, ...rest }: ReadMoreProps) => {
  const [more, setMore] = React.useState(false)

  const handleClick = () => setMore(!more)

  return (
    <Typography onClick={handleClick} {...rest}>
      {content.slice(0, !more ? 100 : content.length)}
      {content.length > 100 && (
        <Typography color='primary' component='span' sx={{ cursor: 'pointer' }}>
          {!more ? '...read more' : ' show less'}
        </Typography>
      )}
    </Typography>
  )
}
