import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

function App() {

  const [info, setInfo] = useState([])
  const [character, setCharacter] = useState('')

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character`)
    .then(response => {
      setInfo(response.data.results)
      console.log(info)
    })
  },[])

  const handleEvent = (e) => {
    axios(`https://rickandmortyapi.com/api/character/${e.target.value}`)
    .then(response => {
      setCharacter(response.data)
    })
  }
  
  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{character.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img height="250" alt={character.name} src={character.image}/>
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select id="dropdown" type="text" onChange={handleEvent}>
              {info.map((character, index) => {
                return (
                  <option value={character.id} key={index}>
                  {character.name}</option>
                )
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
