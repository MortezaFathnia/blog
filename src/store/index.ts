"use client"

import { Post } from "@/types/Post"
import { create } from "zustand"

type Store = {
  theme: string
  setTheme: () => void
  requestLoading: boolean
  setRequestLoading: (isLoading: boolean) => void
}

const useStore = create<Store>((set) => ({
  theme: 'dark',
  requestLoading: false,
  setTheme: () => set((state) => { const val = state.theme === "light" ? "dark" : "light"; return ({ ...state, theme: val }) }),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading }))
}))

export default useStore