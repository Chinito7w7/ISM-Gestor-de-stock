import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/auth/store/auth.store";

import getProductAction from "../actions/get-products.action";

export const useProducts = () => {
  const { user } = useAuthStore();

  return useQuery({
    queryKey: ["products", user?.email],
    queryFn: () => getProductAction(),
    staleTime:0,
  });
};