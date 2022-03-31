function AddressResults({values}) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0"> 
        {
          <>
          <li>{values.firstName}</li>
          <li>{values.lastName}</li>
          <li>{values.addressLine1}</li>
          <li>{values.city}</li>
          <li>{values.state}</li>
          <li>{values.postalCode}</li>
          <li>{values.country}</li>
          </>
        }
      </ul>
    </div>
  );
}

export default AddressResults;
