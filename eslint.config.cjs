module.exports = [
  {
    files: ['*/.js'],
    rules: {
      'semi': ['error', 'always'],
      'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
      'no-var': 'error',
      'indent': ['error', 2],
      'quotes': ['error', 'double']
    }
  }
];