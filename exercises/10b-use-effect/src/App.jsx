import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  
  const [number, setNumber] = useState(1)
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    axios(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => {
      setDogImages(response.data.message)
    })
  }, [number])

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Make me a controlled input */}
      <select onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="container">
        {dogImages.map((dogImage, idx) => {
          return <img key={`dog-${idx}`} height="200" src={dogImage} alt=''/>;
        })}
      </div>
    </div>
  );
}

export default App;
