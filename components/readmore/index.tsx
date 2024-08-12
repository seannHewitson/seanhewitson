import { TypographyProps } from '@mui/material'
import React from 'react'

import { ReadmoreButton, ReadmoreContainer } from './styles'

type ReadMoreProps = { content: string } & Omit<TypographyProps, 'children'>

export const ReadMore = ({ content, ...rest }: ReadMoreProps) => {
  const [more, setMore] = React.useState(false)

  const handleClick = () => setMore(!more)

  return (
    <ReadmoreContainer onClick={handleClick} {...rest}>
      {content.slice(0, !more ? 100 : content.length)}
      {content.length > 100 && (
        <ReadmoreButton>{!more ? '...read more' : ' show less'}</ReadmoreButton>
      )}
    </ReadmoreContainer>
  )
}
