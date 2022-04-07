// Import useEffect here
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import { useEffect, useState } from "react";
import axios from 'axios'
// import Axios (or use Fetch)

function App() {

  const [quote, setQuote] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    window.setTimeout(() => {
      axios('http://ron-swanson-quotes.herokuapp.com/v2/quotess')
        .then(response => {
          setQuote(response.data);
        })
        .catch(() => {
          setError(true);
          setQuote('')
        })
        .then(() => {
        })
        setLoading(false)
    }, 4000)
  }, [])

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {loading && 
        <h2>Loading...</h2>}
        {error && 
        <h2>Uh oh. Looks like you've been Swansoned!</h2>}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
