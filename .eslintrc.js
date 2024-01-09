const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('eslint', {
  rules: {
    // TODO: all these rules should be renabled/addressed. temporarily turned off to unblock a release.
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unknown-property': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-import-assign': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-no-constructed-context-values': 'off',
  },
  overrides: [{
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', 'setupTest.js'],
    rules: {
      'import/named': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  }],
});
