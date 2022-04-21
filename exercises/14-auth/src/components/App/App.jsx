import { useState } from "react";
import axios from "axios";
import Home from "../Home/Home";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");

  const login = async () => {
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
      setToken(response.data.token);
      setUsername("");
    } catch (error) {
      if (error?.response.status === 401) {
        setErrorMessage("Invalid username and password.");
      }
    }
    setPassword("");
  };

  const logout = async() => {
    const response = await axios("http://localhost:7001/api/logout", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    setToken("");
    console.log(response);
  };

  const handleChange = (e) => {
    e.preventDefault();
    login();
  };

  if (token) {
    return <Home token={token} logout={logout} />;
  } else {
    return (
      <div className="container mt-2 mb-5">
        <h1>Login</h1>
        {/* Handle form submission */}
        <form
          className="form-inline mb-2"
          method="POST"
          onSubmit={handleChange}
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
