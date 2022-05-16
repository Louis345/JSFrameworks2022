import { useContext } from "react";
import { AccessTokenContext } from "../../contexts/AccessTokenContext";
import { Route, Redirect } from "react-router-dom";

/**
 * This will redirect the user to the login form if they haven't logged in.
 */
function ProtectedRoute({ children, ...restOfProps }) {
  /**
   * If the user is logged in, the JWT token will be stored in the Context API.
   */
  const { hasToken } = useContext(AccessTokenContext);
  const isLoggedIn = hasToken();

  return isLoggedIn ? (
    /**
     * If the user is logged in, return the child component
     */
    <Route {...restOfProps}>{children}</Route>
  ) : (
    /**
     * If the user isn't logged in, redirect to the login form
     */
    <Redirect to="/login" />
  );
}

export default ProtectedRoute;
