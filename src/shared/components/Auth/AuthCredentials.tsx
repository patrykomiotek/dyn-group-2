import { Button } from "@/shared/ui";
import { useState, type MouseEventHandler, useCallback } from "react";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleToggle: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
  //   setIsLoggedIn((value) => !value);
  // }, []);
  // const handleToggle: MouseEventHandler<HTMLButtonElement> = () => {
  //   setIsLoggedIn((value) => !value);
  // };

  return (
    <div>
      <p>Is user logged in? {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={context.toggle}>
        Toggle
        {/* <span>Toggle</span> */}
      </Button>
    </div>
  );
};
