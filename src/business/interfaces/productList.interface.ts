import type { Product } from "./product.interface";

export interface ListProductResponse {
  products: Product[];
  total: number;
  page: number;
}