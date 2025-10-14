import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks/redux";
import { add } from "@/features/basket/basketSlice";
import type { ProductDto } from "../types";

type Props = {
  data: ProductDto[];
};

export function ProductList({ data }: Props) {
  // const dispatch = useAppDispatch();

  // const handleAddToBasket = (product: ProductDto) => dispatch(add(product));

  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id} className="space-y-6 mb-4">
          <h2 className="text-2xl">
            <Link to={`/products/${elem.id}`} className="text-blue-600">
              {elem.fields.name}
            </Link>
            {/* <Button onClick={() => handleAddToBasket(elem)}>+</Button> */}
            <Button onClick={() => null}>+</Button>
          </h2>
          <p>{elem.fields.description}</p>
        </div>
      ))}
    </div>
  );
}
