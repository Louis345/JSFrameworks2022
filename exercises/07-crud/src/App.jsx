import { useState } from "react";
import "./App.css";

const GroceryList = () => {

  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [actionItem, setActionItem] = useState([])
  console.log(actionItem);

  const handleSubmit = event => {
    event.preventDefault();
    setActionItem([
    ...actionItem, {item , price }
    ])
  }

  const deleteItem = (index) => {
    setActionItem(
      actionItem.filter((item, currentIndex) => currentIndex !== index)
    )
  }

  const clearItems = () => {setActionItem([])}

  const calcCost = () => {

  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form onSubmit={handleSubmit} method="POST" className="row g-3">

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={item}
              onChange = {e => setItem(e.target.value)}
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={price}
              onChange = {e => setPrice(e.target.value)}
            />
          </div>
          
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
          
        </form>
      </div>

      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {actionItem.map((item, index) => {
              return (
                <tr>
                  <td>{item.item}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => deleteItem(index)}>
                      &times;
                    </button>
                  </td>
                </tr>
              )
            })}
            
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}

          </tbody>
        </table>

        <p className="lead">
          <strong>Total Cost: ${calcCost}</strong>
        </p>

        <div className="d-flex justify-content-end">
          <button onClick={clearItems} type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>

      </div>
    </div>
  );
};

export default GroceryList;
