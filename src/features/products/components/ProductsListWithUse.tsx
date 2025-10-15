import { use } from "react";
import { fetchProducts } from "../services/products";

const productsPromise = fetchProducts();

export const ProductsListWithUse = () => {
  const products = use(productsPromise);

  return (
    <ul>
      {products.map((product) => (
        <div key={product.id}>
          <h2 className="text-2xl">{product.fields.name}</h2>
        </div>
      ))}
    </ul>
  );
};
