import { Header } from '@/components/Header'
import '@/styles/globals.css'
import clsx from 'clsx'
import { Gochi_Hand, Inter, Lexend } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi-hand',
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: {
    template: '%s - David Bonan',
    default:
      'David Bonan - Senior developer, entrepreneur, and general technology enthusiast',
  },
}

export default function RootLayout({ children, params }) {
  // Default to English, but will be overridden by locale-specific pages
  const lang = params?.locale || 'en'

  return (
    <html lang={lang}>
      <body
        className={clsx(
          'font-sans',
          inter.variable,
          lexend.variable,
          gochiHand.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
