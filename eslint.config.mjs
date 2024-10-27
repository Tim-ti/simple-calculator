import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ignores: ['*.config.*', 'dist/*'],
  },
  {
    env: {
      browser: true,
      es2021: true,
    },

    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },

    plugins: ['react', 'prettier'],

    rules: {
      'prettier/prettier': 'error',
    },
  },
];
