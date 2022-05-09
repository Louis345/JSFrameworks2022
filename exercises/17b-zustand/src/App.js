// Import useEffect here
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import store from "./store/store";
import { useEffect } from "react";
// import Axios (or use Fetch)

function App() {
  const { ronSwansonQuote, setRonSwansonQuote } = store((state) => state);

  useEffect(() => {
    setRonSwansonQuote();
  }, []);
  /**
   * Set up your state
   */

  /**
   * Make an AJAX call with the useEffect hook
   */

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {/* Display a loading message */}
        {/* Display an error message if the API fails */}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {ronSwansonQuote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
