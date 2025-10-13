import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import {
  configDefaults,
  defineConfig as defineVitestConfig,
} from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
const viteConfig = defineViteConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()],
});

const vitestConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest-setup.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
    exclude: [
      ...configDefaults.exclude,
      "./tests/**",
      "./tests-examples/**",
      "./src/stories/**",
      "./src/**/*.{stories}.tsx",
      "./src/**/*.{stories}.ts",
      "./src/ui/utils/cn.ts",
    ],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
