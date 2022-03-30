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
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }
  const [values, setValues] = useState({});
  const [displayResults, setDisplayResults] = useState(false);
  
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
          value={values.firstName}
          onChange = {handleChange}
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
          value={values.lastName}
          onChange = {handleChange}
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
          value={values.address}
          onChange = {handleChange}
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
        value={values.city} 
        onChange= {handleChange}/>
      </div>

      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select 
        id="state" 
        name="state" 
        className="form-control" 
        value={values.state}
        onChange = {handleChange}
        >
          <option value = ''></option>
          {States.map((state, index) => {
            return (
              <option key={`state-${index}`} value={state}>{state}</option>
            )
          })}
        </select>
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
          value={values.zip}
          onChange = {handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select 
        id="country" 
        name="country" 
        className="form-control" 
        value={values.country}
        onChange = {handleChange}
        >
          <option value = ''></option>
          {Countries.map((country, index) => {
            return (
              <option key={`country-${index}`} value={country}>{country}</option>
            )
          })}
        </select>
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
            {<li>{values.firstName}</li>}
            {<li>{values.lastName}</li>}
            {<li>{values.addressLine1}</li>}
            {<li>{values.city}</li>}
            {<li>{values.state}</li>}
            {<li>{values.postalCode}</li>}
            {<li>{values.country}</li>}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
