export default {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-vue"],
  overrides: [
    {
      files: "*.vue",
      options: {
        parser: "vue",
      },
    },
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
  ],
};
