import { IsmApi } from "@/api/IsmApi";
import type { Product } from "../interfaces/product.interface";

export const updateProductAction = async (
  productLike: Partial<Product>
): Promise<Product> => {
  const { _id, ...rest } = productLike;

  if (!_id) throw new Error("Product id is required");

  rest.stock = Number(rest.stock ?? 0);
  rest.price = Number(rest.price ?? 0);

  const { data } = await IsmApi.put<Product>(`/products/${_id}`, rest);

  return data;
};