import "./App.css";
import { images } from "./images/images";
// import something here

function App() {
  return <div className="App">
    {images.map((image) =>{
      return <div key={image}>
        <img src={image} alt=''/>
      </div>
    })}
    </div>;
}

export default App;
