import { Box, Chip, Icon } from '@mui/material'

export const Status = () => {
  return null

  return (
    <Chip
      label='Open to Work'
      icon={
        <Icon
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: '0px !important',
          }}
        >
          <Box
            sx={{
              bgcolor: ({ palette }) => palette.error.main,
              width: 8,
              height: 8,
              borderRadius: '50%',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />
        </Icon>
      }
      color='success'
      sx={{
        height: 26,
        fontWeight: 600,
        color: '#FFF',
        transition: 'unset',
        position: 'relative',
        overflow: 'hidden',
        background: ({ palette: { success } }) =>
          // @ts-expect-error -- MUI Theme Issue
          `linear-gradient(135deg, ${success.main} 0%, ${success['100']} 100%)`,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient( 90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100% )',
          animation: 'shimmer 3s ease-in-out infinite',
          animationDelay: '2s',
          transform: 'translateX(-100%)',
          transition: 'unset',
        },
        '& .MuiChip-label': {
          pl: 1,
          textTransform: 'uppercase',
          fontWeight: 500,
          pr: 1.5,
          fontSize: 12,
        },
      }}
    />
  )
}
