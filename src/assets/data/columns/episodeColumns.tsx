import type { ColumnDef } from '@tanstack/react-table'
import type { Episode } from '@/types/EpisodeTypes'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DataTableRowActionsEpisode } from '@/components/DataTable/data-table-row-actions-episode'

export const columns: Array<ColumnDef<Episode>> = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'air_date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Air Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'episode',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Episode
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActionsEpisode row={row.original} />
  }
]
