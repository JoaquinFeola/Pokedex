import { Link, NavLink } from "react-router-dom";
import './navbar.css';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="home"
            >
                Pokedex
            </Link>

            <div className="navbar-collapse ">
                <div className="navbar-nav">

                    <NavLink
                        className={"nav-item nav-link"}
                        to="/"
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        className={"nav-item nav-link"}
                        to="pokedex"
                    >
                        Pokedex
                    </NavLink>
                </div>
            </div>
        </nav>
        )
}
