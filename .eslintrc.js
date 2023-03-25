module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: false },
    ],
    'no-plusplus': 'off',
    'no-empty-pattern': 'off',
    'quote-props': 'off',
    'no-throw-literal': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/order-in-components': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    // 'import/order': 'off',
    'no-empty': 'off',
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-filter': 'off',
  },
};
