import { poppins } from '@/modules/core/fonts/poppins'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tamakún y sus muchachos',
  description:
    'Web oficial de la agrupación Tamakún y sus muchachos. Somos una agrupación de música tropical, carranga, tecnomerengue y cumbia de Chinácota, Norte de Santader, Colombia.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
