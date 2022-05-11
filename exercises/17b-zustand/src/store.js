import create from "zustand";

export const useStore = create((set) => ({
  quote: {},
  fetch: async (url) => {
    const res = await fetch(url);
    set({quote: await res.json()})
  },
}));
