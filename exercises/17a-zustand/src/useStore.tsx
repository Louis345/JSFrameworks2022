import create from "zustand"

interface Likes {
  likes: number,
  increaseLikes: () => void;
  decreaseLikes: () => void;
}

export const useStore = create<Likes>((set) => ({
likes: 0,
increaseLikes: () => set((state) => ({likes: state.likes + 1})),
decreaseLikes: () => set((state) => ({likes: state.likes - 1}))
}));