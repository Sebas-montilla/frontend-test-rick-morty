import Image from 'next/image'
import React from 'react'
import wallpaper from '@/assets/images/rick-and-morty-login.jpg'
import { LoginForm } from '@/components/LoginForm'

const Login = () => {
  return (
    <>
      <main className="h-screen w-screen flex items-center">
        <section className="w-[50vw] h-screen hidden lg:block: relative md:block">
          <Image
            src={wallpaper}
            alt="wallpaper"
            fill={true}
            priority={true}
            className='object-cover '
          />
        </section>
        <section className="w-[100%] md:w-[50%] lg:w-[50%] h-full bg-gradient-to-r from-sky-900 to-green-600 flex items-center justify-center">
          <LoginForm />
        </section>
      </main>
    </>
  )
}

export default Login
