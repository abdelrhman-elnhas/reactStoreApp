import ProductData from "../ProductData";
import Product from "./ProductItem";
import "../productList.css";

function ProductList() {
  const products = ProductData.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <div className="container">
      <div className="productList">{products}</div>
    </div>
  );
}

export default ProductList;
