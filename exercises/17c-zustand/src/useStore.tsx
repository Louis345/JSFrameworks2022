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
  setPokemon: (filterPokemons: []) => void;
  search: string;
  setSearch: (text: string) => void;
}

export const pokemonStore = create<pokemonState>((set) => ({
  pokemons: PokemonJSON.results,
  setPokemon: (filterPokemons: []) =>
    set((state) => ({
      pokemons: [ ...filterPokemons],
    })),
  search: "",
  setSearch: (text: string) =>
    set(() => ({
      search: text,
    })),
}));
