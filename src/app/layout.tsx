import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DataProvider } from '@/context/DataContext'
import { Toaster } from "@/components/ui/toaster"
import AuthContextProvider from '@/context/authContext'

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
      <body className={`${inter.className} dark`}>
        <AuthContextProvider>
          <DataProvider>
            {children}
            <Toaster />
          </DataProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
