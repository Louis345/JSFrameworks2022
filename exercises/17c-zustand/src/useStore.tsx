import create from "zustand";
import PokemonJSON from "./Pokemon.json";

interface pokemonState {
  pokemons: {
    name: string;
    url: string;
    image: string;
    isFavorite: boolean;
    id: number;
  }[];
  setPokemon: () => void;
  search: string;
  setSearch: (text: string) => void;
}

export const pokemonStore = create<pokemonState>((set) => ({
  pokemons: PokemonJSON.results,
  setPokemon: () =>
    set((state) => ({
      pokemons: [...state.pokemons],
    })),
  search: "",
  setSearch: (text: string) =>
    set(() => ({
      search: text,
    })),
}));
