import './global.css'

import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

const nunito = Nunito({ subsets: ['latin'], variable: '--font-primary' })

export const metadata = {
  description:
    'Leve a felicidade para o seu lar. Encontre o animal de estimação ideal para seu estilo de vida!',
  title: {
    default: 'FindAFriend',
    template: '%s | FindAFriend',
  },
} satisfies Metadata

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={nunito.variable} lang="pt-br">
      <body className="min-h-screen w-full bg-zinc-50 text-blue-950 antialiased">
        {children}
      </body>
    </html>
  )
}
