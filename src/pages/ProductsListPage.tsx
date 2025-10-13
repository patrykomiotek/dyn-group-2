import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@/features/products/services/products";
import { ProductList } from "@/features/products/components/ProductsList";
import type { ProductDto } from "@/features/products/types";

export function ProductsListPage() {
  // const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);
  const { data, isLoading, isError } = useQuery<ProductDto[]>({
    queryKey: ["products-list"],
    queryFn: fetchProducts,
  });

  // const records = data?.records

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [data, setData] = useState<ProductDto[]>([]);

  // const loadData = async () => {
  //   try {
  //     const response = await fetchProducts();
  //     setData(response.records);
  //   } catch {
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Products List</h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Component error</p>}
      {data && <ProductList data={data} />}
    </div>
  );
}
