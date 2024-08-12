import { StarRounded } from '@mui/icons-material'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemTextProps,
  styled,
} from '@mui/material'

export const Icon = styled(ListItemIcon)({
  minWidth: 'unset',
  position: 'relative',
})

export const Item = styled(ListItem)({
  display: 'inline-block',
  textAlign: 'center',
  userSelect: 'none',
  width: 'unset',
})

export const Star = styled(StarRounded)({
  color: '#FBB13C',
  left: 25,
  position: 'absolute',
  top: -10,
})

type TextProps = ListItemTextProps & {
  fontSize?: number | string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Text = styled(({ fontSize, ...rest }: TextProps) => (
  <ListItemText {...rest} />
))(({ fontSize }) => ({
  '& span': {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize,
    '& svg': {
      marginLeft: '0.5rem',
    },
  },
}))
