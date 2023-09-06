module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  ignorePatterns: ['node_modules', 'dist', 'build', 'remix.config.js'],
  extends: [
    '@remix-run/eslint-config',
    'plugin:json/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    /**
     * ESlint overrides
     */
    camelcase: [
      'error',
      {
        properties: 'always',
        allow: [
          '^UNSAFE_',
          '^animate__',
          '^client_',
          '^experiment_',
          '^event_',
          '^page_',
          '^schema_',
          '^session_',
          '^signup_',
          '^st_',
          '^tealium_',
          '^user_',
          '^utm_',
        ],
      },
    ],
    eqeqeq: 'error',
    'import/extensions': [
      'error',
      'never',
      {server: 'always', json: 'always', css: 'always'},
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': ['error'],
    'no-unexpected-multiline': 'error',
    'no-use-before-define': 'off',
    'no-warning-comments': 'off',

    /**
     * jsx-a11y overrides
     */
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // These two rules result in a significant number of false positives so we
    // need to keep them disabled.
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/control-has-associated-label': 'off',

    /**
     * Tailwind overrides
     */

    // This rule is disabled so that we can use color scheme classes
    'tailwindcss/no-custom-classname': 'off',
    // This rule doesn't recognize customizations and conflicts with the tailwind prettier order settings
    'tailwindcss/classnames-order': 'off',

    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['objectLiteralProperty'],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
    'no-console': 'error',
  },
  settings: {
    'import/ignore': [/@build\//],
    jest: {
      version: 27,
    },
  },
};