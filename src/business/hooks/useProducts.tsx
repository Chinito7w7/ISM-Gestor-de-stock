import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import getProductAction from "../actions/get-products.action";

export const useProducts = () => {
  const [searchParams] = useSearchParams();

  const limit = Number(searchParams.get("limit")) || 9;
  const page = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("category") || undefined;

  return useQuery({
    queryKey: ["products", { limit, page, category }],
    queryFn: () =>
      getProductAction({
        limit: isNaN(+limit) ? 9 : Number(limit),
        page: isNaN(+page) ? 1 : Number(page),
      }),
  });
};