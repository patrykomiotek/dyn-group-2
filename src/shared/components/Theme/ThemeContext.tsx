import { createContext, useContext } from "react";

const contextValues = {
  theme: "light",
};

const ThemeContext = createContext(contextValues);

{
  /* <ThemeContext>


  <Button>Click me</Button>

</ThemeContext> */
}

// const context = useContext(ThemeContext);
// context.theme
