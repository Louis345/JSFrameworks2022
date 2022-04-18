import { useParams } from "react-router-dom";
import inventory from "../../assets/inventory";

function Category() {

  const { category } = useParams(); // change me
  const products = inventory[category];

  return (
    <div>
      <h2 className="lead mb-4">CATEGORY &gt; {category.toUpperCase()}</h2>
      <div className="row">
        {
          /**
           * This loops through all the products for a the selected category
           * and displays them on the screen.
           */
          products.map((product, index) => {
            return (
              <div className="col mb-4" key={`product-${index}`}>
                <img src={product.image} alt="" className="mb-3" />
                <div>{product.description}</div>
                <strong>$ {product.price.toFixed(2)}</strong>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Category;
