import { Button, Input } from "@/shared/ui";
import { useBookStore } from "./booksStore";
import { useState, type FormEventHandler } from "react";

export const Books = () => {
  const books = useBookStore((state) => state.books);
  const addBook = useBookStore((state) => state.addNewBook);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // console.log(event.currentTarget);

    const form = event.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data);

    // addBook
    addBook(data.title as string, data.author as string, data.isbn as string);
  };

  return (
    <div>
      <div>
        <h1>Books</h1>
        {books.map((elem) => (
          <div key={elem.id}>
            <h3>{elem.title}</h3>
            <p>
              {elem.author}, {elem.isbn}
            </p>
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input label="Title" name="title" required />
          <Input label="Author" name="author" required />
          <Input label="ISBN" name="isbn" required />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
