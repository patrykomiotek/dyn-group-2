import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../../shared/ui";
import { createProductSchema, type CreateProductDto } from "../types";
import { crateProduct } from "../services/products";
import { useCreateProduct } from "../hooks/useCreateProduct";

type Props = {
  onSubmit: () => void;
};

export function CreateProductQuery({ onSubmit }: Props) {
  const { register, handleSubmit, formState, reset } =
    useForm<CreateProductDto>({
      resolver: zodResolver(createProductSchema),
    });

  const mutation = useCreateProduct();

  const onFormSubmit: SubmitHandler<CreateProductDto> = async (data) => {
    // console.log(data);

    mutation.mutate(data, {
      onSuccess: (newProduct) => {
        console.log("Product created successfully: ", newProduct);
        reset();
        // toast.success('Success!')
        // navigate("/products")
      },
      onError: (error) => {
        // toast.error('Oh no!')
        console.error("Failed to create product: ", error);
      },
    });
  };

  const { errors, isValid, isSubmitted, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {isSubmitted && !isValid && <p className="text-red-500">Invalid form</p>}

      <Input label="Name" error={errors.name} {...register("name")} />

      <Input
        label="Description"
        error={errors.description}
        {...register("description")}
      />

      <Input
        label="Price"
        type="number"
        error={errors.price}
        {...register("price", { valueAsNumber: true })}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
