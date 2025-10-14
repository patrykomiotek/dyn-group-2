import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProduct } from "../services/products";
import type { ProductDto } from "../types";

const queryKey = "products-list";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeProduct,

    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: [queryKey] });

      const previousProducts = queryClient.getQueryData<ProductDto[]>([
        queryKey,
      ]);

      // optimastically remove the product
      queryClient.setQueryData<ProductDto[]>([queryKey], (old) => {
        if (!old) {
          return old;
        }
        return old.filter((product) => product.id !== productId);
      });

      return {
        previousProducts,
        deletedProduct: previousProducts?.find(
          (product) => product.id === product.id
        ),
      };
    },

    onSuccess: (_, productId) => {
      // let's consider if its worth to refetch data?
      // queryClient.invalidateQueries({ queryKey: [queryKey] });
      queryClient.invalidateQueries({ queryKey: [queryKey, productId] });
    },

    onError: (err, productId, context) => {
      if (context?.previousProducts) {
        // full list (deleted product included)
        queryClient.setQueryData([queryKey], context.previousProducts);
      }
      console.error("Error in mutation: ", context?.deletedProduct);
    },

    onSettled: () => {
      // consider if it's worth it
      // /queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};
