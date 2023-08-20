'use client'

// import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { useStore } from '@/store/useStore'
import { toast } from '@/components/ui/use-toast'
import { CharacterColumns } from '@/components/DataTable/columns'
import { DataTable } from '@/components/DataTable/data-table'

const url = 'https://rickandmortyapi.com/api/character'

const CharacterDashboard = () => {
  const { character } = useStore()

  const { getCharacters } = useStore()

  useEffect(() => {
    // if (character.length === 0) {
    getCharacters(url)
      .then(() => {
        // Data fetched successfully
      })
      .catch(() => {
        toast({
          variant: 'destructive',
          title: 'Oh no body! Something went wrong.',
          description: 'There was a problem getting the characters.'
        })
      })
    // }
  }, [])

  return (
    <>
      <div>
        {character && (
          <>
            <DataTable columns={CharacterColumns} data={character} />
          </>
        )}
      </div>
    </>
  )
}

export default CharacterDashboard
