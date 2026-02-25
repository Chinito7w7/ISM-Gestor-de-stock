import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import getProductAction from "../actions/get-products.action";

export const useProducts = () => {
  const [searchParams] = useSearchParams();

  const limit = Number(searchParams.get("limit"))
  const page = Number(searchParams.get("page"))
  const category = searchParams.get("category") || undefined;

  return useQuery({
    queryKey: ["products", { limit, page, category }],
    queryFn: () =>
      getProductAction({
        limit,
        page
      }),
  });
};