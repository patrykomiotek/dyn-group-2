import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";
import { Button, Input } from "../ui";

export function FormState() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [favLanguage, setFavLanguage] = useState("");
  const [formState, setFormState] = useState({
    email: "test@wp.pl",
    password: "",
    favLanguage: "",
  });

  const { email, password, favLanguage } = formState;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ email, password, favLanguage });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    // const name = event.target.name;
    const id = event.target.id;

    setFormState({
      ...formState,
      [id]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          E-mail: {email}, password: {password}, favLanguage: {favLanguage}
        </p>
      </div>
      <Input
        label="E-mail"
        id="email"
        value={email}
        type="email"
        onChange={handleChange}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <Input
        label="Favorite language"
        id="favLanguage"
        value={favLanguage}
        onChange={handleChange}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
