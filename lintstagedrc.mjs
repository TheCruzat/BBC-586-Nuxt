export default {
  // Lint and format Vue, TS, and JS files
  "*.{js,jsx,ts,tsx,vue}": ["eslint --fix", "prettier --write"],

  // Format JSON, Markdown, and other files
  "*.{json,md,yml,yaml}": ["prettier --write"],
};
