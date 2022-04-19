import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-dark bg-ligth sticky-top">
                <div className="container">
                    <NavLink className="btn btn-outline-danger" to="/">
                        Inicio
                    </NavLink>
                    <NavLink className="btn btn-outline-danger" to="/blog">
                        Blog
                    </NavLink>
                    <NavLink className="btn btn-outline-danger" to="/Pokemones">
                        Items
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar