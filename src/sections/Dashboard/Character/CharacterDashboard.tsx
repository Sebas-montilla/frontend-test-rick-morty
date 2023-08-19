'use client'

// import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { useStore } from '@/store/useCharacterStore'
import { toast } from '@/components/ui/use-toast'
import { CharacterColumns } from '@/components/DataTable/columns'
import { DataTable } from '@/components/DataTable/data-table'

const CharacterDashboard = () => {
  const { character } = useStore()

  const { getCharacters } = useStore()

  useEffect(() => {
    getCharacters()
      .then(() => {
        // Data fetched successfully
      })
      .catch(() => {
        toast({
          variant: 'destructive',
          title: 'Oh no body! Something went wrong.',
          description: `There was a problem with your request.`
        })
      })
  }, [])

  return (
    <>
      <div>
        {character?.map((c) => (
          <>
            <DataTable columns={CharacterColumns} data={c.results} />
          </>
        ))}
      </div>
    </>
  )
}

export default CharacterDashboard
