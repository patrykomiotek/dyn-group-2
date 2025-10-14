import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { createSelectors } from "@/hooks/createSelectors";

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
}
type BookWithoutId = Omit<Book, "id">;

interface BookStore {
  books: Book[];
  addNewBook: (
    title: Book["title"],
    author: Book["author"],
    isbn: Book["isbn"]
  ) => void;
}

export const useBookStore = create<BookStore>()(
  devtools((set) => ({
    books: [],

    // addNewBook(book: BookWithoutId)
    addNewBook: (
      title: Book["title"],
      author: Book["author"],
      isbn: Book["isbn"]
    ) =>
      set((state) => ({
        books: [
          ...state.books,
          {
            id: uuidv4(),
            title,
            author,
            isbn,
          },
        ],
      })),
  }))
);
