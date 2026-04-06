module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // Vue 3 Component Naming
    "vue/multi-word-component-names": "off",
    "vue/component-definition-name-casing": ["error", "PascalCase"],

    // Vue 3 Script Setup Best Practices
    "vue/no-setup-props-destructure": "warn",
    "vue/no-v-html": "warn",

    // TypeScript Strictness
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/explicit-function-return-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",

    // Code Quality
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "vue/attributes-order": "off",

    // Nuxt-Specific
    "nuxt/no-cjs-in-config": "off",

    // Accessibility (a11y)
    "vue/no-static-inline-styles": "warn",

    "vue/no-v-html": "off",
  },
};
