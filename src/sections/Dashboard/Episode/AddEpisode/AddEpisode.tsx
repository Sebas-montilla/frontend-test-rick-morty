import AddEpisodeForm from '@/components/AddEpisodeForm'
import React from 'react'

const AddEpisode = () => {
  return (
    <div>
      <section className="flex flex-col gap-6 md:flex-row items-center justify-evenly px-8 pb-6">
        <div className="w-full md:w-[80%]">
          <h1 className="font-heebo text-[2rem] text-accent-electricgreen md:text-[3rem] lg:text-[4rem]">
            Create a new Episode
          </h1>
          <h1 className="font-poppins text-sm text-text">
            Now Morty, let’s create a new episode, like one where you and I are
            from dimension 87 and where like the por Jesse Pinkman and the
            greate Heisenberg, won’t you like to be the Pinkman of my
            Heisenberg, ha!
          </h1>
        </div>
      </section>
      <AddEpisodeForm />
    </div>
  )
}

export default AddEpisode
