'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Home() {
  const authToken = Cookies.get('authTokens')
  const router = useRouter()

  useEffect(() => {
    if (authToken) {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }, [])

  return <></>
}
