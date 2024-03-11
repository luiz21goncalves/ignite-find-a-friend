import './global.css'

import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen w-full bg-zinc-50 text-blue-950 antialiased">
        {children}
      </body>
    </html>
  )
}
