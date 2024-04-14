import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        &nbsp; &nbsp;
        <NavLink to="/directors">Directors</NavLink>
        &nbsp; &nbsp;
        <NavLink to="/actors">Actors</NavLink>
        &nbsp; &nbsp;
        <NavLink to="/movie">Movie</NavLink>
    </nav>
    );
};

export default NavBar;
