import { useEffect, useState } from "react";
import { getProductList } from "../../services/productServices";
import ProductItem from "./ProductItem";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getProductList();
      setProducts(result);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className="product">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Product;
