'use client'

// import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { useStore } from '@/store/useStore'
import { toast } from '@/components/ui/use-toast'
import { EpisodeColumns } from '@/components/DataTable/columns'
import { DataTable } from '@/components/DataTable/data-table'

const url = 'https://rickandmortyapi.com/api/episode'

const EpisodeDashboard = () => {
  const { episode } = useStore()

  const { getEpisodes } = useStore()

  useEffect(() => {
    // if (character.length === 0) {
    getEpisodes(url)
      .then(() => {
        // Data fetched successfully
      })
      .catch(() => {
        toast({
          variant: 'destructive',
          title: 'Oh no body! Something went wrong.',
          description: 'There was a problem getting the episodes.'
        })
      })
    // }
  }, [])

  return (
    <>
      <div>
        {episode && (
          <>
            <DataTable columns={EpisodeColumns} data={episode} />
          </>
        )}
      </div>
    </>
  )
}

export default EpisodeDashboard
