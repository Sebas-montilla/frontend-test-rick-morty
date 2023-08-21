import CharacterDashboard from '@/sections/Dashboard/Character/CharacterDashboard'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rick & Morty | Characters'
}

const page = () => {
  return (
    <main className='p-3 flex flex-col items-center justify-center'>
      <CharacterDashboard />
    </main>
  )
}

export default page
