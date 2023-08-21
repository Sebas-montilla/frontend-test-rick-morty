'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

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
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useStore } from '@/store/useStore'
import { type Episode } from '@/types/EpisodeTypes'

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

const AddEpisodeForm = () => {
  const { addEpisode } = useStore()
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newEp: Episode = {
      id: Math.round(Math.random() * (1234234 - 31234) + 1234234),
      name: data.name,
      air_date: data.air_date,
      episode: data.episode
    }
    addEpisode(newEp)
    router.push('/dashboard/episodes')
    toast({
      variant: 'success',
      description: `The episode has been created succesfully!`
    })
  }
  return (
    <div className="p-6 bg-input rounded-md md:mx-24 lg:mx-36">
      <FormUI {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a name, e.g 'Rick and the Rick Kind'" {...field} />
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
                  <Input placeholder="Enter a type, e.g 'Bird-person'" {...field} />
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
                  <Input placeholder="Enter a episode code, e.g 'S10E14'" {...field} />
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

export default AddEpisodeForm
