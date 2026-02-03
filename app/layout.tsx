import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import './globals.css'

import { Box, Divider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'

import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import { ThemeProvider } from 'context/theme'

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    default: 'Sean Hewitson',
    template: '%s | Sean Hewitson',
  },
  description: 'Sean Hewitson, Full-Stack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' style={{ height: '100%' }}>
      <body
        className={outfit.variable}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Navigation />
              <Box
                component='main'
                sx={{
                  maxWidth: 900,
                  margin: '0 auto',
                  padding: { xs: '2rem 1rem', md: '4rem 2rem' },
                  pt: { xs: 4, md: 10 },
                  flex: 1,
                  width: '100%',
                }}
              >
                {children}
              </Box>
              <Divider
                sx={{
                  width: '100%',
                  maxWidth: { xs: 804, md: 772 },
                  margin: '0 auto',
                }}
              />
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
