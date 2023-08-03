import { create } from 'zustand'

interface ILaunchAdjustment {
  inputValue: string
  setInputValue: (newValue: string) => void
}

export const useLaunchAdjustment = create<ILaunchAdjustment>((set) => ({
  inputValue: '',
  setInputValue: (newValue) => set(() => ({ inputValue: newValue })),
}))
