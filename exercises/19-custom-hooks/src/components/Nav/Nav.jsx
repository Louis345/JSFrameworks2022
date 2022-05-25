import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-pills mt-3">
      <li className="nav-item">
        <NavLink to="/font/select" className="nav-link">
          Fonts
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/font/preview" className="nav-link">
          Preview
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
