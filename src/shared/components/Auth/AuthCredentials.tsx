import { Button } from "@/shared/ui";
import { useState, type MouseEventHandler, useCallback } from "react";

export const AuthCredentials = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setIsLoggedIn((value) => !value);
  }, []);

  return (
    <div>
      <p>Is user logged in? {isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={handleToggle}>Toggle</Button>
    </div>
  );
};
