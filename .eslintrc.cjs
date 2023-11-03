module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "project": "./tsconfig.json",
    "extraFileExtensions": ["vue"],
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}

