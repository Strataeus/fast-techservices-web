import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Scripts with legacy CommonJS syntax
    "scripts/*.cjs",
    // Vendor templates and external code
    "vendor/**",
    "tools/templates/**",
    // Documentation
    "docs/**",
    // Node modules and lock files
    "node_modules/**",
    "**/node_modules/**",
    "package-lock.json",
    "yarn.lock",
    ".pnp",
    // IDE and OS files
    ".idea/**",
    ".vscode/**",
    "*.swp",
    "*.swo",
    ".DS_Store",
    // Logs
    "*.log",
    "npm-debug.log*",
    "yarn-debug.log*",
    "yarn-error.log*",
    // Environment variables
    ".env",
    ".env.local",
    ".env.*.local",
    "app/web/_templates/**",
  ]),
]);

export default eslintConfig;
