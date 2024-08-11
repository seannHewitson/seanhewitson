import { ListItemText, Typography, styled } from '@mui/material'

export const Comment = styled(Typography)({
  position: 'relative',
  color: '#009DFF5F',
  fontSize: '1.5rem',
  fontStyle: 'italic',
  marginBottom: '1rem',
  marginTop: '1rem',
  marginLeft: '2rem',
  '&:before': {
    content: '"// "',
    position: 'absolute',
    left: '-2rem',
  },
})

export const ItemText = styled(ListItemText)({
  '& span': {
    alignItems: 'center',
    display: 'inline-flex',
    '& svg': {
      marginLeft: '0.5rem',
    },
  },
})
