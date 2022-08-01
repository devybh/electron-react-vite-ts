module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [0],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"]
  },
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js', '/scripts/*', 'vite.config.ts', '*.html']
}
