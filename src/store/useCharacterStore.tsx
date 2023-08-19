import { create } from 'zustand'
import type { CharacterRes } from '@/types/CharacterTypes'

interface CharacterState {
  character: CharacterRes[]
  getCharacters: () => Promise<void>
}

export const useStore = create<CharacterState>()((set) => ({
  character: [],
  getCharacters: async () => {
    const response = await (
      await fetch(`https://rickandmortyapi.com/api/character`)
    ).json()
    set((state) => ({
      character: [...state.character, response]
    }))
  }
}))
