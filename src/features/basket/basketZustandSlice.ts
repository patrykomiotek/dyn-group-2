// import { create, type StateCreator } from "zustand";
import { type StateCreator } from "zustand";
// import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
// import { createSelectors } from "@/hooks/createSelectors";

export interface CountSlice {
  count: number;
  addNewItem: () => void;
}

export const useCountSlice: StateCreator<CountSlice, [], [], CountSlice> = (
  set
  // get
) => ({
  count: 0,

  // addNewBook(book: BookWithoutId)
  addNewItem: () =>
    set((state) => ({
      count: state.count + 1,
    })),
});
