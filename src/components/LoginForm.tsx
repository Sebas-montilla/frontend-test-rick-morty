'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import Cookies from 'js-cookie'

import { Button } from '@/components/ui/button'
import {
  Form as FormUI,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  username: z.string().includes('mortysmith@science.com', {
    message: 'Invalid username'
  }),
  password: z.string().includes('mortysmith', {
    message: 'Invalid password'
  })
})

export function LoginForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  const hashUserData = (username: string, password: string) => {
    const data = `${username}: ${password}`
    return btoa(data)
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    Cookies.set('authTokens', hashUserData(data.username, data.password))
    router.push('/dashboard')
  }

  return (
    <div className="p-6 shadow-2xl shadow-accent-electricgreen bg-background rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
      <FormUI {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>
                  mortysmith@science.com for test reasons
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormDescription>mortysmith for test reasons</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Log in
          </Button>
        </form>
      </FormUI>
    </div>
  )
}
