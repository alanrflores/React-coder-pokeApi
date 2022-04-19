import CardsPoke from "../cards/CardsPoke";
import Pagination from "../pagination/Pagination";

const PokeDex = (props) => {
    const { pokemons, page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    };




    return (
        <>
            <div className="cargandoPoke">
                <div className="ball">
                    <div className="shadow">
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-between p-2">
                <h1>Pokedex</h1>

                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage} />
            </div>
            {loading ?
                <div className="container">
                    <div className="spinner-border m-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                </div>
                :
                <div className="row m-2">
                    {pokemons.map((pokemon, idx) => {
                        return (
                            <CardsPoke pokemon={pokemon} key={pokemon.name} />
                        )
                    })}
                </div>
            }
        </>
    );
};

export default PokeDex;