import { z } from "zod";

export const envSchema = z.object({
  VITE_API_DATABASE: z.string().min(1, {
    error: "VITE_API_DATABASE is required",
  }),
  VITE_API_TOKEN: z.string().min(1, {
    error: "VITE_API_TOKEN is required",
  }),
});
