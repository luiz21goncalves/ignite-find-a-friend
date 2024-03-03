/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort', 'sort-keys'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': 'off',
    'sort-keys/sort-keys-fix': 'error',
  },
}
