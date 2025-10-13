import { fetchProduct } from "@/features/products/services/products";
import type { ProductDto } from "@/features/products/types";
import { useApi } from "shared/hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  // const { data, isError, isLoading } = useApi<ProductDto>(() =>
  //   fetchProduct(id)
  // );
  const { data, isError, isLoading } = useQuery<ProductDto>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  console.log({ data });

  return (
    <div>
      <h2 className="text-2xl">Product details</h2>
      <p>Id: {id}</p>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
