import { useDebugValue, useEffect, useState } from 'react'

interface useLocalStorageProps {
  key: string
  initalState: any
}

export function useLocalStorage({ key, initalState }: useLocalStorageProps) {
  const [state, setState] = useState(initalState)
  useDebugValue(state)

  // To avoid problems with server side rendering
  useEffect(() => {
    const item = localStorage.getItem(key)
    if (item) setState(parse(item))
  }, [])

  // if state changes set new value
  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [state])

  return [state, setState]
}

const parse = (obj: string) => {
  try {
    return JSON.parse(obj)
  } catch {
    return obj
  }
}
