module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react-hooks'],
  globals: {
    __DEV__: false,
    fetch: false
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/no-array-index-key': 0,
    'react/sort-comp': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'prefer-const': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0
  }
};
