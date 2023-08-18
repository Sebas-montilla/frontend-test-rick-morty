'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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
import { useToast } from '@/components/ui/use-toast'
import { useAuthContext } from '@/context/authContext'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  username: z.string().includes('pickelrick@science.com', {
    message: 'Invalid username'
  }),
  password: z.string().includes('ricksanchez', {
    message: 'Invalid password'
  })
})

export function LoginForm() {
  const { toast } = useToast()
  const { login } = useAuthContext()
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    })
      .then(async (res) => await res.json())
      .then((res) => {
        login(res.data)
        router.push('/dashboard')
      })
      .catch((err) => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: err
        })
      })
  }

  return (
    <div className="p-6 shadow-2xl shadow-cyan-500/50 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
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
                  pickelrick@science.com for test reasons
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
                <FormDescription>ricksanchez for test reasons</FormDescription>
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
