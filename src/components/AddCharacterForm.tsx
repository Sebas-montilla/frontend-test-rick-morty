'use client'

import React from 'react'

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
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useStore } from '@/store/useStore'
import { Status, type Character, Species, Gender } from '@/types/CharacterTypes'

const FormSchema = z.object({
  name: z.string({
    required_error: 'Please add a name'
  }),
  status: z.string({
    required_error: 'Please select a status.'
  }),
  species: z.string({
    required_error: 'Please select a specie.'
  }),
  type: z.string({
    required_error: 'Please add a type.'
  }),
  gender: z.string({
    required_error: 'Please select a gender.'
  }),
  origin: z.string({
    required_error: 'Please add an origin.'
  })
})

const AddCharacterForm = () => {
  const { addCharacter } = useStore()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newChar: Character = {
      id: Math.round(Math.random() * (1234234 - 31234) + 1234234),
      name: data.name,
      status:
        data.status === 'Alive'
          ? Status.Alive
          : data.status === 'Dead'
            ? Status.Dead
            : Status.Unknown,
      species: data.species === 'Alien' ? Species.Alien : Species.Human,
      type: data.type,
      gender:
        data.gender === 'Female'
          ? Gender.Female
          : data.gender === 'Male'
            ? Gender.Male
            : Gender.Male,
      origin: { name: data.origin, url: '' }
    }
    addCharacter(newChar)
    toast({
      description: `The character has been created succesfully!`
    })
  }
  return (
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
          <FormField
            control={form.control}
            name="species"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specie</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a specie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Alien">Alien</SelectItem>
                    <SelectItem value="Human">Human</SelectItem>
                  </SelectContent>
                </Select>
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
                  <Input
                    placeholder="Enter the character's type, e.g., 'Fish-person'"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="unknown">unknown</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origin</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the character's origin, e.g., 'Earth' or 'Dimension C-137"
                    {...field}
                  />
                </FormControl>
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
  )
}

export default AddCharacterForm
