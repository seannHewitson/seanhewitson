import { StarRounded } from '@mui/icons-material'
import { ListItem, ListItemIcon } from '@mui/material'
import Image from 'next/image'

import { Skill as SkillType } from 'types'

import { ItemText } from './styles'

type SkillProps = SkillType & {
  fontSize?: number | string
  size?: number
  scrollable?: boolean
}

export const Skill = ({
  name,
  favourite,
  fontSize = '1rem',
  icon,
  scrollable,
  size = 40,
}: SkillProps) => (
  <ListItem
    sx={{
      display: 'inline-block',
      width: 'unset',
      textAlign: 'center',
      ...(scrollable && {
        '&:last-child': { mr: { xs: '9vw', sm: '300px' } },
      }),
    }}
  >
    {icon && (
      <ListItemIcon sx={{ minWidth: 'unset', position: 'relative' }}>
        <Image
          alt={name}
          height={`${size}`}
          src={`/icons/${icon}`}
          width={`${size}`}
        />
        {favourite && (
          <StarRounded
            style={{
              color: '#FBB13C',
              position: 'absolute',
              top: -10,
              left: 25,
            }}
          />
        )}
      </ListItemIcon>
    )}
    <ItemText sx={{ '& span': { fontSize } }}>{name}</ItemText>
  </ListItem>
)
