import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { DataProvider } from '@/context/DataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick & Morty',
  description: 'WELCOME TO CLUB, PAL.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <DataProvider>
          <Sidebar />
          {children}
        </DataProvider>
      </body>
    </html>
  )
}
