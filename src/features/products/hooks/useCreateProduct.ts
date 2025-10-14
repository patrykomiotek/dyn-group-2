import { useMutation, useQueryClient } from "@tanstack/react-query";
import { crateProduct } from "../services/products";
import type { ProductDto } from "../types";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: crateProduct,

    onMutate: async (newProduct) => {
      await queryClient.cancelQueries({ queryKey: ["products-list"] });

      const previousProducts = queryClient.getQueryData<ProductDto[]>([
        "products-list",
      ]);

      queryClient.setQueryData<ProductDto[]>(["products-list"], (old) => {
        const tmpProduct: ProductDto = {
          id: Date.now().toString(),
          fields: newProduct,
        };
        return old ? [tmpProduct, ...old] : [tmpProduct];
      });

      return { previousProducts };
    },

    onSuccess: (newProduct: ProductDto) => {
      queryClient.invalidateQueries({ queryKey: ["products-list"] });

      queryClient.invalidateQueries({
        queryKey: ["products-list", newProduct.id],
      });
    },

    onError: (err, newProduct, context) => {
      if (context?.previousProducts) {
        queryClient.setQueryData(["products-list"], context.previousProducts);
      }
      console.error("OnError: ", err);
    },

    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: ["products-list"] });
    // },
  });
};
