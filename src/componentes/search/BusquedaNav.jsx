import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";


const BusquedaNav = () => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();
    
   

    const onChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value.length === 0) {
            return null;
        }

    };

    const onClick = async (e) => {
        const data = await obtenerDatos(search);
        console.log(data)
        setPokemon(data);
    };

    const { favoritePokemons } = useContext(FavoritesContext);

    return (
        <>
            <div>
                <nav className="navbar navbar-dark bg-dark border border-2 border-danger rounded-pill p-3 m-4">
                    <div className="container-fluid justify-content-center">
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar Pokemon..."
                                aria-label="Search"
                                onChange={onChange}
                            />
                        </form>
                        <div>
                            <button
                                className="btn btn-outline-danger  mt-2"
                                onClick={onClick}
                                type="submit">
                                Buscar
                            </button>

                        </div>
                    </div>
                </nav>
                <div className="d-flex justify-content-end mt-2">❤ {favoritePokemons.length}</div>
            </div>
        </>
    )
}
//Api pokemon..
export const obtenerDatos = async (pokemon) => {
    try {

        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (err) {
        console.log(err)
    }
};

export const getPokemons = async (limit = 25, offset = 0) => {
    try {

        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json()
        return data;

    } catch (err) {};
};

export const getPokemonData = async (url) => {
    try {

        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch (err) {};
};

export default BusquedaNav