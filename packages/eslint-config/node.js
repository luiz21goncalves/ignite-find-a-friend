/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['simple-import-sort', 'sort-keys'],
  rules: {
    camelcase: 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': 'off',
    'sort-keys/sort-keys-fix': 'error',
  },
}
