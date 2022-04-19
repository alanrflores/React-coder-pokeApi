import { NavLink } from "react-router-dom"


const Carrousel = () => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="./images/01.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block mb-4">
                         <NavLink to="/Pokemones">
                            <button className="btn btn-outline-info opacity-50 mb-4">
                                <h5 className="fw-bold ">Pokemones</h5></button>
                         </NavLink>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./images/02.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="./images/03.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block"> </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Carrousel


