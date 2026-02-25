import { IsmApi } from "@/api/IsmApi";


export const deleteProductAction = async (id: string) => {
  const { data } = await IsmApi.delete(`/products/${id}`);
  return data;
};