import { useState } from "react";
import "../productItem.css";

function Product(props) {
  const [addedtocart, setAddedToCart] = useState(false);

  return (
    <div className="card">
      <img className="card-img" src={props.product.image} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.product.title}</h4>
        <p className="card-text desc">{props.product.description}</p>
        <p className="card-text">{props.product.price}</p>
        <button onClick={() => setAddedToCart(true)}>
          {addedtocart ? "Added to Cart" : "Add to Cart"}
        </button>
        {addedtocart ? (
          <button onClick={() => setAddedToCart(false)}>
            Remove from Cart
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Product;
