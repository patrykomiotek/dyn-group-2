import { Button, Input } from "@/shared/ui";
import { useBookStore } from "./booksStore";
import { useState, type FormEventHandler } from "react";

export const Books = () => {
  const books = useBookStore((state) => state.books);
  const addBook = useBookStore((state) => state.addNewBook);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);

    // addBook
    addBook(title, author, isbn);
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
          <Input
            label="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            label="Author"
            onChange={(event) => setAuthor(event.target.value)}
          />
          <Input
            label="ISBN"
            onChange={(event) => setIsbn(event.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
