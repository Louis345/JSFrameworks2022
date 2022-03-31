import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {

  const [displayResults, setDisplayResults] = useState(false);
  const [values,setValues] = useState({})

  return <>
  { 
    displayResults 
    ? <AddressResults values={values} /> 
    : <AddressForm setDisplayResults={setDisplayResults} values={values} setValues={setValues} />
  } 
  </>;
}

export default App;
