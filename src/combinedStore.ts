import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

import { type BookSlice, useBookSlice } from "@/features/books/booksSlice";
import {
  type EmployeeSlice,
  useEmployeeSlice,
} from "@/features/employees/employeeSlice";

export type CombinedStore = BookSlice & EmployeeSlice;

export const useCombinedStore = create<CombinedStore>()(
  devtools(
    (...args) => ({
      ...useBookSlice(...args),
      ...useEmployeeSlice(...args),
    }),
    {
      name: "combined-store",
    }
  )
);

// Books component
export const useBooks = () => useCombinedStore((state) => state.books);
export const useEmployees = () => useCombinedStore((state) => state.employees);

export const useBookActions = () => {
  return useCombinedStore((state) => ({
    addBook: state.addNewBook,
  }));
};

export const useEmployeesActions = () => {
  return useCombinedStore((state) => ({
    addEmployee: state.addEmployee,
    fireEmployee: state.fireEmployee,
  }));
};
