import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "@/features/products/services/products";
import { ProductList } from "@/features/products/components/ProductsList";
import type { ProductDto } from "@/features/products/types";
import { CreateProductQuery } from "@/features/products/components/CreateProductQuery";

export function ProductsListPage() {
  // const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);
  const { data, isLoading, isError, refetch } = useQuery<ProductDto[]>({
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

  // 1) use create product form here - add form and try to refetch new data
  // 2) we will use mutations + optimistic updates

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Products List</h1>

      <div className="flex">
        <div className="w-1/2">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Component error</p>}
          {data && <ProductList data={data} />}
        </div>
        <div className="w-1/2">
          <CreateProductQuery />
        </div>
      </div>
    </div>
  );
}
