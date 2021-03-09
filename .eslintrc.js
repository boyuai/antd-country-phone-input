module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['react-app', 'plugin:prettier/recommended'],
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': 2,
    'no-duplicate-imports': 2,
    'no-alert': 1,
    'no-console': 1,
  },
};
