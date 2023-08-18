'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { createContext, useContext } from 'react'
// import { v4 as uuid } from 'uuid'

const DataContext = createContext()

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // save data in localStorage using hook
  const [episodes, setEpisodes] = useLocalStorage({
    key: 'episodes',
    initalState: []
  })
  const [characters, setCharacters] = useLocalStorage({
    key: 'characters',
    initalState: []
  })

  return (
    <DataContext.Provider
      value={{
        episodes,
        characters
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
