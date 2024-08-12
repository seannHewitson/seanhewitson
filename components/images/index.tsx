'use client'

import { CloseRounded } from '@mui/icons-material'
import { Box, Modal } from '@mui/material'
import React from 'react'

import { Scroller } from '../scroller'
import {
  CloseButton,
  CloseText,
  Image,
  ImageContainer,
  ImagesContainer,
  Indicator,
  InnerModal,
  ModalImage,
  ModalImageContainer,
  Subtitle,
} from './styles'

export const Images = ({ images }: { images: string[] }) => {
  const [selected, setSelected] = React.useState<string>()

  return (
    <ImagesContainer>
      <Subtitle variant='subtitle1'>Screenshots:</Subtitle>
      <Scroller
        ListProps={{
          sx: {
            height: { xs: '200px', sm: '350px' },
          },
        }}
      >
        {images.map((image) => (
          <ImageContainer key={image}>
            <Image
              alt={image}
              onClick={() => setSelected(image)}
              src={`/images/${image}`}
            />
          </ImageContainer>
        ))}
      </Scroller>
      <Box>
        <Indicator color='text.secondary' variant='body2'>
          Click on an image to view it in full size.
        </Indicator>
      </Box>
      <Modal
        disableAutoFocus
        onClose={() => setSelected(undefined)}
        open={!!selected}
        sx={{ padding: '1rem' }}
      >
        <InnerModal>
          <ModalImageContainer>
            <CloseButton onClick={() => setSelected(undefined)}>
              <CloseRounded />
              <CloseText variant='body2'>Close</CloseText>
            </CloseButton>
          </ModalImageContainer>
          <ModalImage alt={selected} src={`/images/${selected}`} />
        </InnerModal>
      </Modal>
    </ImagesContainer>
  )
}
