import create from "zustand";

export const useStore = create((set) => ({
  quote: {},
  isLoading: false,
  fetch: async (url) => {
    set ({isLoading: true});
    setTimeout(async() =>{

      const res = await fetch(url);
      set({ ronSwansonQuote: await res.json(), isLoading: false });
    })
  },
}));