import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductAction } from "../actions/delete-product.action";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};