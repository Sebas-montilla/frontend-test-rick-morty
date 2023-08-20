'use client'

import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form as FormUI,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useStore } from '@/store/useStore'
import { type Episode } from '@/types/EpisodeTypes'

interface DataTableRowActionsProps {
  row: Episode
}

const FormSchema = z.object({
  name: z.string({
    required_error: 'Please add a name'
  }),
  air_date: z.string({
    required_error: 'Please add an air date.'
  }),
  episode: z.string({
    required_error: 'Please add an episode code.'
  })
})

export function DataTableRowActionsEpisode({ row }: DataTableRowActionsProps) {
  const { editEpisode } = useStore()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const updateEpisode: Episode = {
      id: row.id,
      name: data.name,
      air_date: data.air_date,
      episode: data.episode,
      characters: row.characters,
      url: row.url,
      created: row.created
    }
    editEpisode(row.id, updateEpisode)
    toast({
      description: `The episode ${data.name} has been updated`
    })
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>Edit Episode</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Episode: <span className="font-normal">{row?.name}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <FormUI {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="air_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Air date</FormLabel>
                    <FormControl>
                      <Input placeholder="type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="episode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Episode</FormLabel>
                    <FormControl>
                      <Input placeholder="episode" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogTrigger className="w-full">
                <Button className="w-full" type="submit">
                  Save changes
                </Button>
              </DialogTrigger>
            </form>
          </FormUI>
        </div>
      </DialogContent>
    </Dialog>
  )
}
