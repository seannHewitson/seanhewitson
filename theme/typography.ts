import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const typography: TypographyOptions = {
  fontFamily: outfit.style.fontFamily,
  allVariants: {
    letterSpacing: '-0.05em',
  },
  h3: {
    letterSpacing: '-0.05em !important',
    '@media (max-width: 600px)': {
      fontSize: '1.85rem',
    },
  },
}
