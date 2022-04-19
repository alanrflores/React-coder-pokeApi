import { useState, useEffect } from "react";
import { FavoritesProvider } from "../componentes/context/FavoritesContext";
import PokeDex from "../componentes/pokedex/PokeDex"
import BusquedaNav, { getPokemonData } from "../componentes/search/BusquedaNav"
import { getPokemons } from "../componentes/search/BusquedaNav"

const Pokemones = () => {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(["charmander"]);

  const fetchPokemons = async () => {
    
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (err) {}
  };


  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    //console.log(name)
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);

  };



  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

  return (
    <FavoritesProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons
    }}>

      <div className="container">
        <div className="col d-flex flex-wrap align-content-center justify-content-center mt-4">
          <img
            src={imgUrl}
            alt="pokemon-logo"
          />
        </div>

        <div className="d-flex justify-content-center">
          <BusquedaNav />
        </div>
        <div className="row">
          <div className="col">
            <PokeDex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total} />
          </div>
        </div>
      </div>
    </FavoritesProvider>
  )
}

export default Pokemones;