module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    camelcase: 'off',
    indent: ['error', 2],
    semi: ['error', 'never'],
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.svg'] }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'linebreak-style': 0,
    'react/jsx-tag-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'object-curly-newline': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  }
}
