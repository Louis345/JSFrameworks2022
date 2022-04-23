import { createContext, useState } from "react";
import axios from "axios";

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
   * Logs the user out by sending a request to the server
   * and deleting the token.
   */
  const logout = () => {
    return axios
      .request({
        method: "DELETE",
        url: "/api/logout",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .catch((error) => console.error(error))
      .then(() => {
        /**
         * We logout on the client by deleting the token
         * and we reset the expiry to stop the countdown
         * to get a refresh token.
         */
        setToken("");
      });
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
