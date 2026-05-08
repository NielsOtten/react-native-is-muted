import { defineConfig } from "eslint/config";
import universeWebConfig from "eslint-config-universe/flat/web.js";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const expoModuleConfig = require("expo-module-scripts/eslint.config.base");

export default defineConfig([
  {
    ignores: ["build/**"],
  },
  ...expoModuleConfig,
  ...universeWebConfig,
]);
