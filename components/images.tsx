'use client'

import { Box, List, ListItem, Modal, Typography } from '@mui/material'
import React from 'react'

export const Images = ({ images }: { images: string[] }) => {
  const [selected, setSelected] = React.useState<string>()

  return (
    <Box>
      <Typography
        sx={{ fontWeight: 'bold', mt: 2, textDecoration: 'underline' }}
        variant='subtitle1'
      >
        Screenshots:
      </Typography>
      <List
        sx={{
          maxWidth: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          height: '350px',
          gap: 2,
          position: 'relative',
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
              }}
            />
          </ListItem>
        ))}
      </List>
      <Modal onClose={() => setSelected(undefined)} open={!!selected}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={selected}
            src={`/images/${selected}`}
            style={{
              height: '100%',
              maxHeight: '100%',
              width: 'auto',
            }}
          />
        </Box>
      </Modal>
    </Box>
  )
}
