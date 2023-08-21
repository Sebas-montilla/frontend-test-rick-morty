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
      <section className="flex flex-col gap-6 md:flex-row items-center justify-evenly px-8 pb-6">
        <div className="w-full md:w-[80%]">
          <h1 className="font-heebo text-[2rem] text-accent-electricgreen md:text-[3rem] lg:text-[4rem]">
            Episodes
          </h1>
          <h1 className="font-poppins text-sm text-text">
            Hey there, Morty! Ready to mess around with characters? You can edit
            names, species, status, and even genders – just be careful not to
            screw up the multiverse. And hey, no need to scour the whole place –
            use the search to find characters by type, name, status, or gender.
            Just remember, Morty, you break it, you bought it. Happy meddling!
          </h1>
        </div>
      </section>
      <div className='w-full'>
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
