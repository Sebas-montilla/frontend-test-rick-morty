import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/assets/images/logos/logoA.svg'
import RickShocked from '@/assets/images/svg/rick-shocked.svg'
import { Button } from '@/components/ui/button'

const Dashboard = () => {
  return (
    <main className="h-full lg:px-10">
      <section className="flex flex-col gap-4 lg:flex lg:flex-row border-b-2 border-blue-solid pb-4">
        <div className="w-full lg:w-[50%] flex flex-col">
          <Image
            src={Logo}
            className="overflow-hidden transition-all"
            alt="logo"
            priority={true}
            height={300}
            width={300}
          />
          <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[3.5rem]">
            Wubbaa lubba dub dub!
          </h1>
          <h3 className="text-lg font-poppins">
            {
              " Welcome to the infinite possibilites, pal! Come, let's see what the universe has for us today"
            }
          </h3>
          <div className="flex gap-5 mt-5">
            <Link href="/dashboard/characters">
              <Button className="px-10">Characters</Button>
            </Link>
            <Link href="/dashboard/episodes">
              <Button className="px-10">Episodes</Button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center">
          <Image
            src={RickShocked}
            className="overflow-hidden transition-all"
            alt="logo"
            priority={true}
            height={400}
            width={400}
          />
        </div>
      </section>
    </main>
  )
}

export default Dashboard
