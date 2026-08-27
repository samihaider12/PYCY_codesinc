// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       globals: globals.browser,
//       parserOptions: { ecmaFeatures: { jsx: true } },
//     },
//   },
// ])

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // <--- Yeh line Node.js globals (like 'module', 'process') enable karti hai
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])