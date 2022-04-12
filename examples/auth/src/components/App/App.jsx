import { useState } from "react";
import Home from "../Home/Home";
import axios from "axios";

function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  /**
   * When a user is logged in, a token is stored in local storage.
   */
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async () => {
    setIsLoading(true);

    try {
      const response = await axios("http://localhost:7001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username,
          password,
        },
      });
      /**
       * I'm telling React the user is logged in by store the token in local storage and state.
       */
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      setUsername("");
    } catch (error) {
      console.error(error);
      /**
       * If the response returns an HTTP status of 401 when loggin in,
       * this means that username or password is incorrect.
       */
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password");
      } else setErrorMessage("We are sorry, unexpected error occurred.");
    }

    setPassword("");
    setIsLoading(false);
  };
  /**
   * When the user is logged out, the token is removed from local storage and state.
   */
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  /**
   * The user is logged in when the token is set in state.
   */
  if (token) {
    return <Home token={token} logout={logout} />;
  } else {
    /**
     * If the user hasn't logged in yet, this renders a login form.
     */
    return (
      <div className="container mt-2 mb-5">
        <h1>Login</h1>
        <form
          className="form-inline mb-2"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              required={true}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="mr-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mr-3"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            Login
          </button>
        </form>
        <p className="form-text">
          <small>
            The username is <em>username</em> and the password is{" "}
            <em>password</em>
          </small>
        </p>
        {isLoading && <p>Loading ...</p>}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
}

export default App;
