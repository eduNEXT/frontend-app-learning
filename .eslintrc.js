const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('eslint', {
  rules: {
    'import/named': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-exports': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': 'off',
  },
});
