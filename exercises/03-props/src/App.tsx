import "./App.css";
import Welcome from "./Components/welcome";

function App() {
  return <div className="App"> 
   <Welcome name='Randy' age={42}/>
   <Welcome name='Ricky' age={24}/>
  </div>;
}

export default App;
