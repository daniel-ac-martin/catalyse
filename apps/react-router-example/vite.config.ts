import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
//import tsconfigPaths from "vite-tsconfig-paths"; // Users probably don't need to comment this out.

export default defineConfig({
  plugins: [
    reactRouter(),
    //tsconfigPaths() // End-users probably don't need to comment this out.
  ]
});
