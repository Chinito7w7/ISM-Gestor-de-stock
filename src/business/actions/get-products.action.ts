import { IsmApi } from "@/api/IsmApi";
import type { Product } from "../interfaces/product.interface";

const getProductAction = async (): Promise<Product[]> => {
  const { data } = await IsmApi.get<Product[]>("/products");
  return data;
};
export default getProductAction