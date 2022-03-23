import "./App.css";
import CharacterCount from "./CharacterCount";
import LessText from "./LessText";
import TemperatureDisplay from "./TemperatureDisplay";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challeng0 1 - Less Text</h1>
        <LessText text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam quia! Hic cum iusto consequatur consequuntur atque odio dolorum facilis quis ad consectetur! Id veniam praesentium nemo illum saepe possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam quia! Hic cum iusto consequatur consequuntur atque odio dolorum facilis quis ad consectetur! Id veniam praesentium nemo illum saepe possimus.'
        maxLength = {15}
        />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
      <div>
        <TemperatureDisplay temp={46}/>
      </div>
    </>
  );
}



export default App;
