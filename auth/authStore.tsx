import { create } from "zustand"

type State ={
    token: string
}

type Actions = {
    setToken: (token: string) => void
}

export const useAuthStore = create <State & Actions> ()
((set) => ({
    token: "", 
    setToken: (token: string) => set({ token }),
}))

// A = {token: string, setToken: (token: string) => void}

