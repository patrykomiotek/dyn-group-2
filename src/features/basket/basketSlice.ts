import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { ProductDto } from "../products/types";

// Define a type for the slice state
export interface BasketState {
  products: ProductDto[];
}

// Define the initial state using that type
const initialState: BasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductDto>) => {
      state.products.push(action.payload);
    },
  },
});

export const { add } = basketSlice.actions;

export const selectProductsCount = (state: RootState) =>
  state.basket.products.length;

export const reducer = basketSlice.reducer;
