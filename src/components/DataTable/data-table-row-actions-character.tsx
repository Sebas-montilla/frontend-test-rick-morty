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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useStore } from '@/store/useStore'
import { type Character, Status } from '@/types/CharacterTypes'

interface DataTableRowActionsProps {
  row: Character
}

const FormSchema = z.object({
  name: z.string({
    required_error: 'Please add a name'
  }),
  type: z.string({
    required_error: 'Please add a type.'
  }),
  status: z.string({
    required_error: 'Please select a status.'
  })
})

export function DataTableRowActionsCharacter({
  row
}: DataTableRowActionsProps) {
  const { editCharacter } = useStore()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const updateCharacter: Character = {
      id: row.id,
      name: data.name,
      status:
        data.status === 'Alive'
          ? Status.Alive
          : data.status === 'Dead'
            ? Status.Dead
            : Status.Unknown,
      species: row.species,
      type: data.type,
      gender: row.gender,
      origin: row.origin,
      location: row.location,
      image: row.image,
      episode: row.episode,
      url: row.url,
      created: row.created
    }
    editCharacter(row.id, updateCharacter)
    toast({
      description: `The character ${data.name} has been updated`
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
            <DropdownMenuItem>Edit Character</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Character: <span className="font-normal">{row?.name}</span>
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
                      <Input placeholder="e.g 'Keetor'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g 'Fish-person'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Alive">Alive</SelectItem>
                        <SelectItem value="Dead">Dead</SelectItem>
                        <SelectItem value="Unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <Button className="w-full" type="submit">
                  Save changes
                </Button>
            </form>
          </FormUI>
        </div>
      </DialogContent>
    </Dialog>
  )
}
