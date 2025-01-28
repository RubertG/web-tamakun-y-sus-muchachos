import { poppins } from '@/modules/core/fonts/poppins'
import { env } from '@/modules/core/lib/env'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tamakún y sus muchachos',
  icons: [
    {
      url: '/logo.webp',
      rel: 'icon',
      type: 'image/webp'
    }
  ],
  description:
    'Web oficial de la agrupación Tamakún y sus muchachos. Somos una agrupación de música tropical, carranga, tecnomerengue y cumbia de Chinácota, Norte de Santader, Colombia.',
  keywords: [
    'Tamakún',
    'música',
    'tropical',
    'carranga',
    'tecnomerengue',
    'cumbia',
    'Chinácota',
    'Norte de Santander',
    'Colombia',
    'Tamakún y sus muchachos',
    'Rubert',
    'Rubert Gonzalez',
    'Kevin',
    'Kevin Gonzalez'
  ],
  authors: [
    {
      name: 'Rubert Gonzalez Perez',
      url: 'https://rubertweb.dev'
    }
  ],
  openGraph: {
    title: 'Tamakún y sus muchachos - Sitio web oficial',
    images: [
      {
        url: `${env.NEXT_PUBLIC_DOMAIN}/logo.webp`,
        width: 800,
        height: 600,
        alt: 'Logo Tamakún y sus muchachos'
      }
    ],
    description:
      'Web oficial de la agrupación Tamakún y sus muchachos. Somos una agrupación de música tropical, carranga, tecnomerengue y cumbia de Chinácota, Norte de Santader, Colombia.',
    url: env.NEXT_PUBLIC_DOMAIN,
    type: 'website',
    locale: 'es_CO',
    siteName: 'Tamakún y sus muchachos'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.webp" />
      </head>
      <body className={`${poppins.className} bg-bg-dark text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
