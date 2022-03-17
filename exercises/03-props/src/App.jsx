import "./App.css";
import Welcome from "./Components/welcome";

function App() {
  return <div className="App"> 
   <Welcome name='Caleb' age='24'/>
   <Welcome name ='Michael'/>
   <Welcome age='26'/>
  </div>;
}

export default App;
