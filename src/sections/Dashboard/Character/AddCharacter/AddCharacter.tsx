import AddCharacterForm from '@/components/AddCharacterForm'
import React from 'react'

const AddCharacter = () => {
  return (
    <div>
      <section className="flex flex-col gap-6 md:flex-row items-center justify-evenly px-8 pb-6">
        <div className="w-full md:w-[80%]">
          <h1 className="font-heebo text-[2rem] text-accent-electricgreen md:text-[3rem] lg:text-[4rem]">
            Create a new Character
          </h1>
          <h1 className="font-poppins text-sm text-text">
            Morty look, now create a new character just like I did, like when I
            created a new me, you know; Pickle Rick ha! Add some things like a
            name, type... Let’s make some science
          </h1>
        </div>
      </section>
      <AddCharacterForm />
    </div>
  )
}

export default AddCharacter
