import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const typography: TypographyOptions = {
  fontFamily: outfit.style.fontFamily,
  allVariants: { lineHeight: 1.25 },
}
