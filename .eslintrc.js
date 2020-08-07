module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'env': {
    node: true
  },
  'rules': {
    'no-console': 1,
    'no-param-reassign': ['error', { props: false }],
    curly: ['error', 'all'],
    'eol-last': ['error', 'always'],
    'no-debugger': 'error',
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 120 }],
    'no-trailing-spaces': 'error',
    'indent': ['error', 2],
    'no-extra-boolean-cast': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/comma-spacing': 'error',
  }
};
