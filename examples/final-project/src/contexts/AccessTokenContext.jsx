import { createContext, useState } from "react";

export const AccessTokenContext = createContext();

export function AccessTokenProvider({ children }) {
  /**
   * Storing the JWT token in the Context API
   */
  const [token, setToken] = useState("");

  /**
   * @returns JWT token. Use to determine if the user is logged in.
   */
  const getToken = () => token;
  /**
   *
   * @returns {boolean} whether or not the token is stored in the Context API.
   * In other words, whether or not the user is logged in.
   */
  const hasToken = () => !!token;

  /**
   * We login by setting the token.
   * The expiry is needed to start the countdown until we refresh the token.
   * @param {string} token
   * @param {number} expiry timestamp
   */
  const login = (token) => {
    setToken(token);
  };
  /**
   * Logs the user out by clearing the token from state
   */
  const logout = () => {
    setToken("");
  };

  return (
    <AccessTokenContext.Provider
      value={{
        getToken,
        hasToken,
        login,
        logout,
      }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
}
