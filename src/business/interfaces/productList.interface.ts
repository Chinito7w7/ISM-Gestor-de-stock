import type { Product } from "./product.interface";

export interface ListProductResponse {
  products: Product[];
  category: string
  limit: number | string;
  page: number;
}