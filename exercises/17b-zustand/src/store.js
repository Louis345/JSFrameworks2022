import create from "zustand";

export const useStore = create((set) => ({
  quote: {},
  fetch: async (url) => {
    const res = await fetch(url);
    set({ronSwansonQuote: await res.json()})
  },
}));
