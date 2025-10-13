import { useRef, type ChangeEventHandler, type FormEventHandler } from "react";
// import { Button } from "../ui/index.ts -> ../ui/Button/index.ts -> ../ui/Button/Button.tsx";
import { Button, Input } from "../ui";
import type { RegistrationFormDto } from "../shared/types/RegistrationFormDto";

type Props = {
  onSubmit: (data: RegistrationFormDto) => void;
};

export function FormRefs({ onSubmit }: Props) {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const favLanguageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const email = emailFieldRef.current?.value || "";
    const password = passwordFieldRef.current?.value || "";
    const favLanguage = favLanguageFieldRef.current?.value || "";

    // console.log({ email, password, favLanguage });
    onSubmit({ email, password, favLanguage });
  };

  const handleLanguageChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log("value: ", event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="E-mail"
        id="email"
        type="email"
        defaultValue="test@wp.pl"
        ref={emailFieldRef}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        ref={passwordFieldRef}
      />
      <Input
        label="Favorite language"
        id="favLanguage"
        ref={favLanguageFieldRef}
        onChange={handleLanguageChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
