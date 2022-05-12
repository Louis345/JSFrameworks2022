import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Header from "./Layouts/Header/Header";
import styles from "./App.module.css";
import { pokemonStore } from "./useStore";

function App() {
  const { pokemons, setPokemon, search, setSearch } = pokemonStore(
    (state) => state
  );
  console.log(search);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (search) {
      handleOnSearch(search);
    }
    if (!search) {
      setPokemon();
    }
  }, [search]);

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

  const handleOnSearch = (search) => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setPokemon(filteredPokemons);
  };

  const handleOnPokemonClick = (id) => {
    const newPokemon = pokemons.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, isFavorite: !pokemon.isFavorite };
      }
      return pokemon;
    });
    setPokemon(newPokemon);
  };

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
