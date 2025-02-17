import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: { vue },
    rules: {
      'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
      ...vue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
       'quotes': ['error', 'single'],
    },
  },
]
