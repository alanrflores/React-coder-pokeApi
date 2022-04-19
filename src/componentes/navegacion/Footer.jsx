import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container border border-4 rounded-pill bg-light mb-2 fixed-bottom opacity-50">
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-danger" aria-current="page" to="/">
                    <h5 className="fw-bold">Pokeapi ©</h5></NavLink>
            </li>
            
            </ul>
        </div>
            )
}

            export default Footer