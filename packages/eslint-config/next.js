/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', '@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort', 'sort-keys'],
  rules: {
    'react/self-closing-comp': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': 'off',
    'sort-keys/sort-keys-fix': 'error',
  },
}