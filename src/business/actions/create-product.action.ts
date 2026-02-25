import { IsmApi } from "@/api/IsmApi";
import type { Product } from "../interfaces/product.interface";

type CreateProductDto = Omit<
  Product,
  "_id" | "owner" | "createdAt" | "updatedAt"
>;

const createProductAction = async (product: CreateProductDto) => {
  const { data } = await IsmApi.post("/products", product);
  return data;
};

export default createProductAction;