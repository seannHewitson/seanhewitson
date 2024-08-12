import { List as MuiList, Typography, styled } from '@mui/material'

export const List = styled(MuiList)({
  maxWidth: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  gap: '1rem',
  position: 'relative',
})

export const ClickIndicator = styled(Typography)({
  fontStyle: 'italic',
  marginTop: '1rem',
  '@media (pointer:none), (pointer:coarse)': {
    display: 'none',
  },
})

export const SwipeIndicator = styled(Typography)({
  display: 'none',
  fontStyle: 'italic',
  marginTop: 2,
  '@media (pointer:none), (pointer:coarse)': {
    display: 'block',
  },
})
