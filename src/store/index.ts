import { create } from 'zustand'
import { Image } from '../types'
import { persist } from 'zustand/middleware';

interface State {
  userName: string,
  favoriteImages: Image[],
  favoritedIds: string[]
}

interface Action {
  setUserName: (username: string) => void,
  addFavoriteImage: (image: Image) => void,
  removeFavoriteImage: (image: Image) => void,
  reset: () => void,
}

const initialState: State = {
  userName: '',
  favoriteImages: [],
  favoritedIds: []
}

export const useStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialState,
      setUserName: (userName: string) => set( () => ({ userName: userName }) ),
      addFavoriteImage: (image: Image) => set( (state) => ({ 
        favoriteImages: [ ...state.favoriteImages, image ],
        favoritedIds: [ ...state.favoritedIds, image.id ]
      }) ),
      removeFavoriteImage: (image: Image) => set( (state) => ({
        favoriteImages: state.favoriteImages.filter((i) => i.id != image.id),
        favoritedIds: state.favoritedIds.filter((i) => i != image.id)
      }) ),
      reset:() => set(initialState)
    }),
    {
      name: 'user'
    }
  )
)

