import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import { useEffect } from "react";
import { useStore } from "./store";

function App() {
  const { quote, fetch } = useStore((state) => state);

  useEffect(() => {
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
  }, []);

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
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
