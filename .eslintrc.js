module.exports = {
  root: true,
  ignorePatterns: [],
  env: {
    browser: true,
    es2022: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['eslint:recommended', 'plugin:@angular-eslint/recommended', 'prettier'],
      rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'warn',
        'no-empty': 'warn',
      },
    },
    {
      files: ['*.spec.ts'],
      extends: ['eslint:recommended', 'plugin:@angular-eslint/recommended', 'prettier'],
      env: {
        jasmine: true,
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
