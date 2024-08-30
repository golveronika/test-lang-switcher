// const { IS_DEV_MODE } = require('./constants')

/**
 * Eslint rules:
 *  - https://eslint.org/docs/rules/
 *
 * Eslint recommended rules(eslint:recommended):
 *  - https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './config/.babelrc.js'
    }
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-unused-vars': 'off',
    // 'no-console': IS_DEV_MODE ? 'warn' : 'error',
    'no-unexpected-multiline': 'off'
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {},
      extends: ['plugin:@typescript-eslint/recommended']
      // rules: {  }
    }
  ]
}
