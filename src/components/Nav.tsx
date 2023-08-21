'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { data } from '@/assets/data/SidebarLinks/sidebarLinks'
import Logo from '@/assets/images/Rick-And-Morty-Logo.png'
import Cookies from 'js-cookie'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()
  const handleLogout = () => {
    Cookies.remove('authTokens')
    router.push('/login')
  }

  return (
    <nav className="w-full h-[4rem] m-h-[5rem] flex items-center justify-between lg:justify-end bg-input px-7 py-2">
      <section className="flex lg:hidden">
        <Button
          variant="outline"
          onClick={() => {
            setOpen((curr) => !curr)
          }}
        >
          <Menu />
        </Button>
      </section>
      <section className="flex items-center gap-6">
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="outline" onClick={handleLogout}>
            Log out
          </Button>
          <h1 className="font-heebo font-bold text-sm md:text-lg">
            Morty Sanchez
          </h1>
        </div>
        <div className="flex md:hidden">
          <Avatar>
            <AvatarImage src="https://4kwallpapers.com/images/wallpapers/rick-and-morty-rick-2560x2560-9494.png" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
        </div>
      </section>
      {/* Sidebar */}
      {open && (
        <div className="bg-gray-700/40 min-h-screen fixed top-0 left-0 right-0 backdrop-blur-sm transition-all ease-in-out duration-500">
          <div className="bg-input min-h-screen w-full md:w-80 top-0 left-0 p-3">
            <div className="flex justify-between pb-5">
              <Image
                src={Logo}
                className="overflow-hidden transition-all w-32"
                alt="logo"
                priority={true}
                height={100}
                width={128}
              />
              <Button
                variant="outline"
                onClick={() => {
                  setOpen((curr) => !curr)
                }}
              >
                <X />
              </Button>
            </div>
            <div>
              {data?.map((item, i) => (
                <Link key={i} href={item.path}>
                  <li
                    className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            pathname === item.path
              ? 'bg-white/10 text-accent-electricgreen/90 font-semibold'
              : 'hover:bg-white/5 hover:text-accent-electricgreen/20 text-text/80'
          }
        `}
                    onClick={() => {
                      setOpen((curr) => !curr)
                    }}
                  >
                    {item.icon}
                    <span className="overflow-hidden transition-all w-52 ml-3">
                      {item.text}
                    </span>
                  </li>
                  {item.text === 'Episodes' ? <hr /> : ''}
                </Link>
              ))}
            </div>
            <hr />

            <Button className='w-full mt-4' variant="outline" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
