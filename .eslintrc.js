module.exports = {
  env: { browser: true },
  extends: ['@andre-brdoch', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    'vue/array-bracket-spacing': [2, 'always'],
    'vue/block-spacing': 2,
    'vue/brace-style': [2, 'stroustrup'],
    'vue/camelcase': [2, { ignoreDestructuring: true }],
    'vue/comma-dangle': [2, 'always-multiline'],
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    'vue/html-closing-bracket-newline': [
      2,
      { singleline: 'never', multiline: 'never' }
    ],
    'vue/max-attributes-per-line': [
      2,
      { singleline: 3, multiline: { max: 3, allowFirstLine: true } }
    ],
    'vue/no-empty-component-block': 2,
    'vue/no-potential-component-option-typo': 2,
    'vue/no-static-inline-styles': 2,
    'vue/no-unused-properties': 2,
    'vue/no-useless-mustaches': 2,
    'vue/no-useless-v-bind': 2,
    'vue/no-v-html': 2,
    'vue/object-curly-spacing': [2, 'always'],
    'vue/order-in-components': [
      2,
      {
        order: [
          'name',
          'functional',
          'components',
          'directives',
          'layout',
          'extends',
          'mixins',
          ['provide', 'inject'],
          'inheritAttrs',
          ['props', 'propsData'],
          'emits',
          'setup',
          'head',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          'asyncData',
          'fetch',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/padding-line-between-blocks': 2,
    'vue/require-default-prop': 0,
    // currently disabled, because triggering false positives:
    'vue/require-component-is': 0,
    'vue/require-direct-export': 2,
    'vue/require-prop-types': 2,
    'vue/space-infix-ops': 2,
    'vue/space-unary-ops': 2,
    'vue/static-class-names-order': 2,
    'vue/this-in-template': 2,
    'vue/v-on-function-call': 2
  }
};
