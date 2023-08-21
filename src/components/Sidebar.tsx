'use client'

import { ChevronLast, ChevronFirst } from 'lucide-react'
import { useContext, createContext, useState } from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { data } from '@/assets/data/SidebarLinks/sidebarLinks'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/assets/images/Rick-And-Morty-Logo.png'

export const SidebarContext = createContext({
  expanded: true
})

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState<true | false>(true)

  return (
    <aside className="h-screen lg:flex hidden">
      <nav className="h-full flex flex-col bg-input border-r shadow-sm">
        <div className="px-4 py-2 pb-2 flex justify-between items-center">
          <Image
            src={Logo}
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'hidden'
            }`}
            alt="logo"
            priority={true}
            height={100}
            width={128}
          />
          <button
            onClick={() => {
              setExpanded((curr) => !curr)
            }}
            className="p-1.5 rounded-lg bg-black hover:bg-black/70"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 ">
          <Avatar>
            <AvatarImage src="https://4kwallpapers.com/images/wallpapers/rick-and-morty-rick-2560x2560-9494.png" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div
            className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-text">Morty Smith</h4>
              <span className="text-xs text-text/60">
                mortysmith@science.com
              </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem() {
  const { expanded } = useContext(SidebarContext)
  const pathname = usePathname()

  return (
    <>
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
          >
            {item.icon}
            <span
              className={`overflow-hidden transition-all ${
                expanded ? 'w-52 ml-3' : 'w-0'
              }`}
            >
              {item.text}
            </span>

            {!expanded && (
              <div
                className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-black/90 text-accent-electricgreen/90 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
              >
                {item.text}
              </div>
            )}
          </li>
          {item.text === 'Episodes' ? <hr /> : ''}
        </Link>
      ))}
    </>
  )
}

export default function Sidebar() {
  return (
    <main>
      <SidebarDemo>
        <SidebarItem />
      </SidebarDemo>
    </main>
  )
}
