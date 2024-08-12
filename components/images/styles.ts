import { Box, IconButton, ListItem, Typography, styled } from '@mui/material'

export const CloseButton = styled(IconButton)({
  border: '1px solid #000',
  boxShadow: 'inset 0px 0px 1em black',
  backdropFilter: 'blur(5px) saturate(720%)',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  width: 50,
  height: 50,
  transition: 'color .5s',
  '&:hover': {
    color: '#FF6D6D',
  },
})

export const CloseText = styled(Typography)({ fontSize: '.75rem' })

export const Image = styled('img')({
  borderRadius: '5px',
  boxShadow: '0px 0px .25em black',
  cursor: 'pointer',
  height: '100%',
  maxHeight: '100%',
  pointerEvents: 'none',
  width: 'auto',
})

export const ImageContainer = styled(ListItem)({
  display: 'inline-block',
  height: '100%',
  position: 'relative',
  textAlign: 'center',
  width: 'unset',
})

export const ImagesContainer = styled(Box)({ userSelect: 'none' })

export const Indicator = styled(Typography)({
  marginTop: '1rem',
  fontStyle: 'italic',
})

export const InnerModal = styled(Box)({
  alignItems: 'center',
  backdropFilter: 'blur(5px) saturate(360%)',
  borderRadius: '5px',
  boxShadow: '0px 0px 1em black',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  padding: '1rem',
  width: '100%',
})

export const ModalImage = styled('img')({
  borderRadius: '5px',
  cursor: 'pointer',
  height: 'auto',
  maxHeight: '100%',
  maxWidth: '100%',
  pointerEvents: 'none',
  width: 'auto',
})

export const ModalImageContainer = styled(Box)({
  padding: '1rem',
  position: 'absolute',
  right: 0,
  top: 0,
})

export const Subtitle = styled(Typography)({
  fontWeight: 'bold',
  marginTop: '1rem',
  textDecoration: 'underline',
})
