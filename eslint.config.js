import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { 
    files: ['**/*.{js,mjs,cjs}', 'bin/*'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'quotes': ['error', 'single'], // одинарные кавычки
      //"semi": ["error", "always"],            // точка с запятой обязательна
      'indent': ['error', 2], // отступ 2 пробела
      'no-multi-spaces': ['error'], // запрещает несколько пробелов
      'no-console': 'off' // разрешить console.log
    },
  },
]);
