import { Box, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import theme from 'theme'

import './index.css'

type LayoutProps = Readonly<{ children: React.ReactNode }>

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://seanhewitson.com'),
  title: {
    template: '%s | Sean Hewitson',
    default: 'Sean Hewitson',
  },
  description: 'Sean Hewitson, Full-Stack developer, Tech Enthusiast.',
}

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default async function Layout({ children }: LayoutProps) {
  return (
    <html lang='en' style={{ fontFamily: outfit.style.fontFamily }}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ margin: '0 auto', maxWidth: 800, pt: 10, width: '90%' }}>
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
