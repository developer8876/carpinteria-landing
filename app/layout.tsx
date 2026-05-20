import type { Metadata } from 'next'
import { Barlow, Inter } from 'next/font/google'
import ScrollReveal from '@/components/ScrollReveal'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AM La Carpintería — Mobiliario a Medida desde 1935',
  description: 'AM La Carpintería — Mobiliario a medida. Precisión industrial + detalle artesanal. Desde 1935, Trenque Lauquen, Buenos Aires.',
  openGraph: {
    title: 'AM La Carpintería',
    description: 'Mobiliario a medida · Precisión industrial + detalle artesanal',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
