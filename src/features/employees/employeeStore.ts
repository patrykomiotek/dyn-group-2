import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
// import { createSelectors } from "@/hooks/createSelectors";

interface Employee {
  id: string;
  name: string;
  role: string;
  salary: number;
}

type EmployeeWithoutId = Omit<Employee, "id">; // Pick

interface EmployeeStore {
  employees: Employee[];
  addEmployee: (employee: EmployeeWithoutId) => void;
  updateSalary: (id: Employee["id"], newSalary: number) => void;
  fireEmployee: (id: Employee["id"]) => void;
}

export const useEmployeeStore = create<EmployeeStore>()(
  devtools((set) => ({
    employees: [],

    addEmployee: (employee: EmployeeWithoutId) => {
      return set((state) => ({
        employees: [
          ...state.employees,
          {
            id: uuidv4(),
            ...employee,
          },
        ],
      }));
    },

    updateSalary: (id: Employee["id"], newSalary: number) => {
      return set((state) => ({
        employees: state.employees.map((employee) =>
          employee.id === id ? { ...employee, salary: newSalary } : employee
        ),
      }));
    },

    fireEmployee: (id: Employee["id"]) => {
      return set((state) => ({
        employees: state.employees.filter((employee) => employee.id !== id),
      }));
    },
  }))
);
