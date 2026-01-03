import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // Recommended config for Astro
  ...eslintPluginAstro.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
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
