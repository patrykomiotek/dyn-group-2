import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: number;
}
