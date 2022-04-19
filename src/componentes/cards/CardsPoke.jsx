import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

const CardsPoke = (props) => {
    const { pokemon } = props;
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoritesContext);

    const redHeart = "❤";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name)
    };
    return (
        <>
            <div className="col-6 col-lg-4  shadow-sm p-3 mb-2 bg-body rounded">
                <div className="card text-white bg-danger  mb-2 ">
                    <div className="container">
                        <div className="row">
                            <h3 className="card-title fw-bold text-uppercase font-monospace">{pokemon.name}</h3>
                            <p className="card-header">#{pokemon.id}</p>
                        </div>
                        <div 
                        className="d-flex justify-content-center shadow-sm p-3 mb-2 bg-body rounded">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                        <div className="card-body">
                            <div 
                            className="card-text fs-4 font-monospac d-flex justify-content-center p-1 ms-2"
                            >{pokemon.types.map((type, idx) => {
                                return (
                                    <div key={idx}>{type.type.name}</div>
                                )
                            })}
                                <button
                                    className="bd-highlight ms-2"
                                    onClick={clickHeart}>

                                  {heart}

                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default CardsPoke;