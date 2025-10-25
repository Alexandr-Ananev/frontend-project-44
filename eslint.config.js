import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}', 'bin/*'],
    plugins: {
      js,
      '@stylistic': stylistic,
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'quotes': ['error', 'single'], // одинарные кавычки
      'indent': ['error', 2], // отступ 2 пробела
      'no-multi-spaces': ['error'], // запрещает несколько пробелов
      'no-console': 'off', // разрешить console.log
      '@stylistic/semi': ['error', 'never'], // запрещает лишние точки с запятой
      '@stylistic/no-trailing-spaces': 'error', // запрещает пробелы в конце строки
      '@stylistic/eol-last': ['error', 'always'], // требует перевод строки в конце файла
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }], // максимум 1 пустая строка подряд
      '@stylistic/spaced-comment': ['error', 'always'], // пробел после // и внутри /* */
    },
  },
])

