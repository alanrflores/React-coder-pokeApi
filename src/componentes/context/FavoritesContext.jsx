import { createContext } from "react";

const FavoritesContext = createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
});


export const FavoritesProvider = FavoritesContext.Provider;
export default FavoritesContext;
