import { CreateProduct } from "@/features/products/components/CreateProduct";

export function CreateProductPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Create Product</h1>
      <CreateProduct />
    </div>
  );
}
