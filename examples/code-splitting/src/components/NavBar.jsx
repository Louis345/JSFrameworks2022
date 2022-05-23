import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Dogogram
        </NavLink>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
