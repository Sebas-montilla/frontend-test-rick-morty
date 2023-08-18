'use client'

import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react'
import { useContext, createContext, useState } from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { data } from '@/assets/data/SidebarLinks/sidebarLinks'
import { usePathname } from 'next/navigation'

const SidebarContext = createContext()

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className={`h-screen`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'hidden'
            }`}
            alt="logo"
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

        <div className="border-t flex p-3">
          <Avatar>
            <AvatarImage src="https://4kwallpapers.com/images/wallpapers/rick-and-morty-rick-2560x2560-9494.png" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <div
            className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-black">Rick Sanchez</h4>
              <span className="text-xs text-gray-600">
                pickelrick@science.com
              </span>
            </div>
            <MoreVertical size={20} />
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
              ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
              : 'hover:bg-indigo-50 text-gray-600'
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
            bg-indigo-100 text-indigo-800 text-sm
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
