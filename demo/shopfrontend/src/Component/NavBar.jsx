import { NavLink } from "react-router-dom";
import "../style/NavBar.css";
function NavBar() {
    return (
        <div className="navBarContainer">
            <h1 className="title">ShoPOP</h1>
            <div className="menuContent">
                <ul className="menu">
                    <li>
                        <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : ""}>Lista </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/esauriti"} className={({ isActive }) => isActive ? "active" : ""}>Prodotti essauriti</NavLink>
                    </li>
                    <li>
                         <NavLink to={"/acquisti"} className={({ isActive }) => isActive ? "active" : ""}>Acquistati</NavLink>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default NavBar;