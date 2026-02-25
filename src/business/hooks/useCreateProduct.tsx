import { useMutation, useQueryClient } from "@tanstack/react-query";
import createProductAction from "../actions/create-product.action";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};