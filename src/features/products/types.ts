import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().min(3, { error: "Description is to short" }),
  price: z.number().positive(),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;

export interface ProductDto {
  id: string;
  fields: {
    name: string;
    description: string;
    price: number;
  };
}

// export type CreateProductDto = Omit<ProductDto, "id">["fields"];
// export type CreateProductDto = Omit<ProductDto, "id">;
