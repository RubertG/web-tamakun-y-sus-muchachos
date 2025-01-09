import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import importHelpers from 'eslint-plugin-import-helpers'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  {
    ignores: ['**/node_modules/*', '**/out/*', '**/.next/*', '**/coverage', 'src/styles/globals.css']
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      'import-helpers': importHelpers,
      '@typescript-eslint': typescriptEslint
    },
    rules: {
      'newline-before-return': 2,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [['/^next/', 'module'], '/^@/styles/', '/^@/components/', '/^@/lib/', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true
          }
        }
      ]
      // '@typescript-eslint/no-unused-vars': [
      //   2,
      //   {
      //     argsIgnorePattern: '^_',
      //   },
      // ],
      // 'no-console': [
      //   2,
      //   {
      //     allow: ['warn', 'error'],
      //   },
      // ],
    }
  }
]

export default eslintConfig
