import { NavLink } from "react-router-dom";
import routes from "../../routes.js";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul className="nav">
      <NavLink
        exact
        className="nav--btn"
        to={routes.home}
        activeClassName="nav--btn__active"
      >
        Home
      </NavLink>
      <NavLink
        className="nav--btn"
        to={routes.moviesPage}
        activeClassName="nav--btn__active"
      >
        Movies
      </NavLink>
    </ul>
  );
};

export default NavBar;
