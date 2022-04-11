import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

function NavBar() {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState({});
  /**
   * Looks up the user's name in Okta
   */
  useEffect(() => {
    /**
     * When user isn't authenticated, forget any user info
     */
    if (!authState || !authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      /**
       * Look up the user's info
       */
      oktaAuth
        .getUser()
        .then((info) => {
          setUserInfo(info);
        })
        .catch((err) => console.error(err));
    }
  }, [authState, oktaAuth]); // Update if authState changes

  return (
    <nav className="navbar navbar-light bg-primary text-white">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          {`{ Movies }`}
        </a>
        {userInfo?.name && (
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {userInfo.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
