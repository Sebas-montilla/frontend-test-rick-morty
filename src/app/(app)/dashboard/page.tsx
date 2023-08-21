import type { Metadata } from 'next'
import Dashboard from '@/sections/Dashboard/Dashboard'
import React from 'react'

export const metadata: Metadata = {
  title: 'Rick & Morty | Dashboard',
  description: 'WELCOME TO CLUB, PAL.'
}

const page = () => {
  return (
    <div className='p-4 flex flex-col items-center justify-center'>
      <Dashboard />
    </div>
  )
}

export default page
