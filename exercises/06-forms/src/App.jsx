import { useState } from "react"
import States from './assets/states.json'
import Countries from './assets/countries.json'
import "./App.css";
// Import here

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    setDisplayResults(true);
  }
  const [displayResults, setDisplayResults] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  
  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="container mt-4" method="POST">

      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={firstName}
          onChange = {e => setFirstName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={lastName}
          onChange = {e => setLastName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={address}
          onChange = {e => setAddress(e.target.value)}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input 
        id="city" 
        name="city" 
        type="text" 
        className="form-control" 
        value={city} 
        onChange= {e => setCity(e.target.value)}/>
      </div>

      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        { }
        <select 
        id="state" 
        name="state" 
        className="form-control" 
        value={state}
        onChange = {e => setState(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={zip}
          onChange = {e => setZip(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select 
        id="country" 
        name="country" 
        className="form-control" 
        value={country}
        onChange = {e => setCountry(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {displayResults && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {<li>{firstName}</li>}
            {<li>{lastName}</li>}
            {<li>{address}</li>}
            {<li>{city}</li>}
            {<li>{state}</li>}
            {<li>{zip}</li>}
            {<li>{country}</li>}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
