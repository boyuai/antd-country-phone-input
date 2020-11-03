// https://prettier.io/docs/en/integrating-with-linters.html#eslint
module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-duplicate-imports': 'error',
    'no-alert': 'warn',
    'no-console': 'warn',
  },
};
