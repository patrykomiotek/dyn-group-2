import type { ApiListResponse } from "shared/types/api";
import { api } from "../../../shared/services/api";
import type { CreateProductDto, ProductDto } from "../types";

export const fetchProducts = async () => {
  const response = await api.get<ApiListResponse<ProductDto>>("/products");

  return response.data.records;

  // fetch('/products')
  // then(response => response.json())
};

export const fetchProduct = async (id: string | undefined) => {
  const response = await api.get<ProductDto>(`/products/${id}`);

  return response.data;
};

export const crateProduct = async (data: CreateProductDto) => {
  const response = await api.post("/products", {
    records: [{ fields: data }],
  });

  return response.data;
};

export const removeProduct = async (id: ProductDto["id"]) => {
  const response = await api.delete(`/products/${id}`);

  return response.data;
};
