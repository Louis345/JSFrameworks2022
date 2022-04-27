import { useState, useEffect } from "react";
// Import something here
import { useOktaAuth } from "@okta/okta-react";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  /**
   * You need to lookup the token from Okta's local storage here.
   * The token is stored in "authState".
   * "authState" is null until the token is loaded from storage.
   */
  const { authState } = useOktaAuth();
  const token = authState?.accessToken?.accessToken;
  /**
   * Makes an API request to our back-end.
   * Includes Okta's access token, so that the back-end
   * knows we are logged in and who we are.
   */
  useEffect(() => {
    /**
     * We need to load the access token before making the request.
     */
    if (token) {
      setErrorMessage("");
      axios
        .request({
          url: "http://localhost:7001/api/okta/movies",
          headers: {
           Authorization: `Bearer ${token}`
          },
        })
        .then((response) => {
          const movies = response.data;
          setMovies(movies);
        })
        .catch((err) => {
          console.error(err);
          setErrorMessage("Oh no! Could not lookup movies from the movies API");
        });
    }
  }, [token]);

  return (
    <>
      <div className="alert alert-success">Hurray! You logged in!</div>

      {Object.values(movies).map((movie, idx) => {
        return (
          <div className="media mb-3" key={`movie-${idx}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              width="150"
              height="220.875"
              className="mr-3"
            />
            <div className="media-body">
              <h2 className="h3">{movie.title}</h2>
              <p>{movie.synopsis}</p>
            </div>
          </div> 
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </>
  );
}

export default Movies;
