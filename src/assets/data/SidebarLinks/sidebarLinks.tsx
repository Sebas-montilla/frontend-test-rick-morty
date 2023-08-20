import {
  LayoutDashboard,
  Film,
  UserCircle,
  UserPlus,
  Clapperboard
} from 'lucide-react'
import type { SidebarItemPropsTypes } from '@/types/SidebarTypes'

export const data: SidebarItemPropsTypes[] = [
  {
    icon: <LayoutDashboard />,
    text: "Dashboard",
    path: "/dashboard",
    activeSegment: "dashboard"
  },
  {
    icon: <UserCircle />,
    text: "Characters",
    path: "/dashboard/characters",
    activeSegment: "characters"
  },
  {
    icon: <Film />,
    text: "Episodes",
    path: "/dashboard/episodes",
    activeSegment: "episodes"
  },
  {
    icon: <UserPlus />,
    text: "Create Character",
    path: "/dashboard/create-character",
    activeSegment: "create-character"
  },
  {
    icon: <Clapperboard />,
    text: "Create Episode",
    path: "/dashboard/create-episode",
    activeSegment: "create-episode"
  }
]
