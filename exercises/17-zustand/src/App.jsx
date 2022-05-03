import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Header from "./Layouts/Header/Header";
import PokemonJSON from "./Pokemon"; // Move me to the store
import styles from "./App.module.css";

function App() {
  /**
   * Instead of local state, we should be getting the Pokemon from the Zustand store
   */
  const [pokemons, setPokemon] = useState([]);
  /**
   * Instead of setting "isFavorite" here, we will need to edit the Pokemon in the Zustand store.
   */
  const [isFavorite, setIsFavorite] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setPokemon(PokemonJSON.results);
  }, []);

  useEffect(() => {
    if (search) {
      handleOnSearch(search);
    }
    if (!search) {
      setPokemon(PokemonJSON.results);
    }
  }, [search]);

  /**
   * This should get the list of Pokemon from the Zustand store
   */
  const renderAllPokemon = () => {
    return (
      <div className={styles.container} id="container">
        {pokemons.map((pokemon, index) => {
          return (
            <React.Fragment key={index}>
              <Card
                image={pokemon.image}
                pokemonName={pokemon.name}
                types={pokemon.types}
                id={pokemon.id}
                isFavorite={pokemon.isFavorite}
                handleOnPokemonClick={handleOnPokemonClick}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  /**
   * This should get the list of Pokemon from the Zustand store
   */
  const handleOnSearch = (search) => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setPokemon(filteredPokemons);
  };

  /**
   * This should edit the list of Pokemon from the Zustand store
   */
  const handleOnPokemonClick = (id) => {
    const newPokemon = pokemons.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, isFavorite: !pokemon.isFavorite };
      }
      return pokemon;
    });
    setPokemon(newPokemon);
  };

  /**
   * This should edit the list of Pokemon from the Zustand store
   */
  const renderFavoritePokemon = () => {
    return (
      <div className={styles.container} id="container">
        {pokemons.map((pokemon, index) => {
          if (pokemon.isFavorite) {
            return (
              <React.Fragment key={index}>
                <Card
                  image={pokemon.image}
                  pokemonName={pokemon.name}
                  types={pokemon.types}
                  id={pokemon.id}
                  isFavorite={pokemon.isFavorite}
                  handleOnPokemonClick={handleOnPokemonClick}
                />
              </React.Fragment>
            );
          }
        })}
      </div>
    );
  };

  const handleView = () => {
    if (isFavorite) {
      return renderFavoritePokemon();
    }
    if (!isFavorite) {
      return renderAllPokemon();
    }
  };

  return (
    <div className="App">
      <Header
        onSearch={(e) => setSearch(e.target.value)}
        onTab={(isFavorite) => {
          setIsFavorite(isFavorite === 2);
        }}
      />
      {handleView()}
    </div>
  );
}

export default App;
