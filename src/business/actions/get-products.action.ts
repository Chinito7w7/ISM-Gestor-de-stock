import { IsmApi } from "@/api/IsmApi";

import type { ListProductResponse } from "../interfaces/productList.interface";

interface Options {
    page?:number;
    limit?:number
}

const getProductAction = async (
  options: Options
): Promise<ListProductResponse> => {
  const { limit = 10, page = 1 } = options;

  const { data } = await IsmApi.get<ListProductResponse>("/products", {
    params: { limit, page },
  });

  return data;
};
export default getProductAction