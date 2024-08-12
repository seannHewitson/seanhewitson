import { Button as MuiButton, styled } from '@mui/material'

export const Button = styled(MuiButton)({
  fontWeight: 'bold',
  transition: 'all .5s',
  '& .MuiButton-endIcon': {
    overflow: 'hidden',
    transition: 'width .5s',
    width: '0px',
  },
  '&:hover': {
    color: '#009DFF',
    '& .MuiButton-endIcon': { width: '20px' },
  },
})
