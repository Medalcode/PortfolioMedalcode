import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default [
  // Recommended config for Astro
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    rules: {
      // General best practices
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-vars": "off", // TypeScript handles this

      // Code quality - relaxed for now
      "prefer-const": "warn",
      "no-var": "error",
      "object-shorthand": "warn",
      "prefer-template": "off", // Too strict for mixed content

      // Astro specific
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
    },
  },

  {
    files: ["**/*.astro"],
    rules: {
      // Astro-specific overrides
      "astro/no-set-html-directive": "warn",
      // Disable rules that conflict with Astro's frontmatter
      "no-undef": "off",
    },
  },

  {
    ignores: [
      "dist/",
      "node_modules/",
      ".astro/",
      "public/",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
];
