'use client'

import { CloseRounded } from '@mui/icons-material'
import { Box, IconButton, ListItem, Modal, Typography } from '@mui/material'
import React from 'react'

import { Scroller } from './scroller'

export const Images = ({ images }: { images: string[] }) => {
  const [selected, setSelected] = React.useState<string>()

  return (
    <Box sx={{ userSelect: 'none' }}>
      <Typography
        sx={{ fontWeight: 'bold', mt: 2, textDecoration: 'underline' }}
        variant='subtitle1'
      >
        Screenshots:
      </Typography>
      <Scroller
        ListProps={{
          sx: {
            height: { xs: '200px', sm: '350px' },
          },
        }}
      >
        {images.map((image) => (
          <ListItem
            key={image}
            sx={{
              display: 'inline-block',
              width: 'unset',
              textAlign: 'center',
              position: 'relative',
              height: '100%',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={image}
              onClick={() => setSelected(image)}
              src={`/images/${image}`}
              style={{
                borderRadius: '5px',
                boxShadow: '0px 0px .25em black',
                cursor: 'pointer',
                height: '100%',
                maxHeight: '100%',
                width: 'auto',
                pointerEvents: 'none',
              }}
            />
          </ListItem>
        ))}
      </Scroller>
      <Box>
        <Typography
          color='text.secondary'
          sx={{ mt: 2, fontStyle: 'italic' }}
          variant='body2'
        >
          Click on an image to view it in full size.
        </Typography>
      </Box>
      <Modal
        disableAutoFocus
        onClose={() => setSelected(undefined)}
        open={!!selected}
        sx={{ padding: '1rem' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '1rem',
            borderRadius: '5px',
            boxShadow: '0px 0px 1em black',
            backdropFilter: 'blur(5px) saturate(360%)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '1rem',
            }}
          >
            <IconButton
              onClick={() => setSelected(undefined)}
              sx={{
                // background: '#19191E',
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
              }}
            >
              <CloseRounded />
              <Typography sx={{ fontSize: '.75rem' }} variant='body2'>
                Close
              </Typography>
            </IconButton>
          </Box>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={selected}
            src={`/images/${selected}`}
            style={{
              height: 'auto',
              maxHeight: '100%',
              width: 'auto',
              maxWidth: '100%',
              borderRadius: '5px',
              cursor: 'pointer',
              pointerEvents: 'none',
            }}
          />
        </Box>
      </Modal>
    </Box>
  )
}
