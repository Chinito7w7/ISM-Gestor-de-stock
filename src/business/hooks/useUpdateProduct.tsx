import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductAction } from "../actions/update-product.action";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};