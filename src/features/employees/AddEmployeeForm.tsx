import { Button, Input } from "@/shared/ui";
import type { FormEventHandler } from "react";
import { useEmployeeStore } from "./employeeStore";

export const AddEmployeeForm = () => {
  const addEmployee = useEmployeeStore((store) => store.addEmployee);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // console.log(event.currentTarget);

    const form = event.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data);

    addEmployee({
      name: data.name as string,
      role: data.role as string,
      salary: parseInt(data.salary as string, 10),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Name" name="name" required />
      <Input label="Role" name="role" required />
      <Input label="Salary" name="salary" type="number" required />
      <Button type="submit">Submit</Button>
    </form>
  );
};
