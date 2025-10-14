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
    addBook(
      data.title.toString(),
      data.author.toString(),
      data.isbn.toString()
    );
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
          <Input label="Title" />
          <Input label="Author" />
          <Input label="ISBN" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
