import { z } from "zod";
import { Button, Input } from "@/shared/ui";
import { useEmployeeStore } from "./employeeStore";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }), // error
  role: z.string().min(1, { error: "Role is required" }), // z.enum(['CTO', 'CEO', ...])
  salary: z.number().positive(),
});

type CreateEmployeeDto = z.infer<typeof validationSchema>;

export const AddEmployeeForm = () => {
  const addEmployee = useEmployeeStore((store) => store.addEmployee);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEmployeeDto>({
    resolver: zodResolver(validationSchema),
  });

  const handleEmployeeSubmit: SubmitHandler<CreateEmployeeDto> = (data) => {
    addEmployee({
      name: data.name,
      role: data.role,
      salary: data.salary,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleEmployeeSubmit)}>
      <Input label="Name" {...register("name")} error={errors.name} />
      <Input label="Role" {...register("role")} error={errors.role} />
      <Input
        label="Salary"
        {...register("salary", { valueAsNumber: true })}
        error={errors.salary}
        type="number"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
