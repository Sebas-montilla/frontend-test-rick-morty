import { create } from 'zustand'
import type { Character, Info } from '@/types/CharacterTypes'
import { type Episode } from '@/types/EpisodeTypes'

interface CharacterState {
  character: Character[]
  episode: Episode[]
  infoCharacter: Info[]
  infoEpisode: Info[]
  getCharacters: (url: string) => Promise<void>
  getEpisodes: (url: string) => Promise<void>
  addCharacter: (newChar: Character) => void
  addEpisode: (newEp: Episode) => void
  editCharacter: (characterId: number, data: Character) => void
  editEpisode: (episodeId: number, data: Episode) => void
}

export const useStore = create<CharacterState>()((set) => ({
  character: [],
  episode: [],
  infoCharacter: [],
  infoEpisode: [],
  getCharacters: async (url) => {
    const response = await (await fetch(url)).json()

    set((state) => {
      const newCharacters = response.results.filter(
        (newChar: Character) =>
          !state.character.some(
            (existingChar) => existingChar.id === newChar.id
          )
      )
      // Update characters and info in the state
      return {
        character: [...state.character, ...newCharacters],
        infoCharacter: response.info // Set the new info
      }
    })
  },
  getEpisodes: async (url) => {
    const response = await (await fetch(url)).json()

    set((state) => {
      const newEpisodes = response.results.filter(
        (newEp: Episode) =>
          !state.episode.some((existingEp) => existingEp.id === newEp.id)
      )
      // Update characters and info in the state
      return {
        episode: [...state.episode, ...newEpisodes],
        infoEpisode: response.info // Set the new info
      }
    })
  },
  addCharacter: (newChar) => {
    set((state) => {
      const updatedCharacters = [...state.character, newChar]
      return {
        character: updatedCharacters,
        infoCharacter: state.infoCharacter
      }
    })
  },
  addEpisode: (newEp) => {
    set((state) => {
      const updatedEpisodes = [...state.episode, newEp]
      return {
        episode: updatedEpisodes,
        infoEpisode: state.infoEpisode
      }
    })
  },
  editCharacter: (characterId, updateCharacter) => {
    set((state) => {
      const updatedCharacter = state.character.map((c) =>
        characterId === c.id ? updateCharacter : c
      )

      return {
        character: updatedCharacter,
        infoCharacter: state.infoCharacter
      }
    })
  },
  editEpisode: (episodeId, updateEpisode) => {
    set((state) => {
      const updatedEpisode = state.episode.map((e) =>
        episodeId === e.id ? updateEpisode : e
      )

      return {
        episode: updatedEpisode,
        infoEpisode: state.infoEpisode
      }
    })
  }
}))
