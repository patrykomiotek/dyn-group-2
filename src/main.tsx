import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { envSchema } from "./envValidation.ts";

try {
  envSchema.parse(import.meta.env);
} catch {
  console.error("Missing env vars");
}

const htmlRoot = document.getElementById("root")!;

createRoot(htmlRoot).render(
  <StrictMode>
    <App />
  </StrictMode>
);
