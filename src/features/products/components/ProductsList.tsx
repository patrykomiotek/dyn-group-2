import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
// import { useAppDispatch } from "@/shared/hooks/redux";
// import { add } from "@/features/basket/basketSlice";
import type { ProductDto } from "../types";
import { useCombinedStore } from "combinedStore";

type Props = {
  data: ProductDto[];
};

export function ProductList({ data }: Props) {
  const addNewItem = useCombinedStore((state) => state.addNewItem);
  // const dispatch = useAppDispatch();

  // const handleAddToBasket = (product: ProductDto) => dispatch(add(product));

  const handleAddToBasket = () => {
    addNewItem();
  };

  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id} className="space-y-6 mb-4">
          <h2 className="text-2xl">
            <div className="flex gap-2">
              <Link to={`/products/${elem.id}`} className="text-blue-600">
                {elem.fields.name}
              </Link>
              <Button onClick={handleAddToBasket}>+</Button>
            </div>
          </h2>
          <p>{elem.fields.description}</p>
        </div>
      ))}
    </div>
  );
}
