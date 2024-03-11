import './global.css'

import { Nunito } from 'next/font/google'
import { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

const nunito = Nunito({ subsets: ['latin'], variable: '--font-primary' })

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={nunito.variable} lang="pt-br">
      <body className="min-h-screen w-full bg-zinc-50 text-blue-950 antialiased">
        {children}
      </body>
    </html>
  )
}
