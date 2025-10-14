import { Button, Input } from "@/shared/ui";
import { AddEmployeeForm } from "./AddEmployeeForm";
import { useEmployeeStore } from "./employeeStore";
import { useState } from "react";

export const EmployeeList = () => {
  const employees = useEmployeeStore((state) => state.employees);
  const updateSalary = useEmployeeStore((state) => state.updateSalary);
  const fireEmployee = useEmployeeStore((state) => state.fireEmployee);
  const [newSalary, setNewSalary] = useState(0);

  const handleRaiseSalary = (id: string) => {
    updateSalary(id, newSalary);
  };

  return (
    <div>
      <h1>Employees</h1>
      <div className="space-y-4">
        {employees.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.name}</h2>
            <p>{employee.role}</p>
            <p>${employee.salary}</p>
            <div>
              <Input
                id={`new-salary-${employee.id}`}
                label="New salary"
                onChange={(event) =>
                  setNewSalary(parseInt(event.target.value, 10))
                }
              />
            </div>
            <Button onClick={() => handleRaiseSalary(employee.id)}>
              Raise salary
            </Button>
            <Button onClick={() => fireEmployee(employee.id)}>Fire</Button>
          </div>
        ))}
      </div>

      <AddEmployeeForm />
    </div>
  );
};
