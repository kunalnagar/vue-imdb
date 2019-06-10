module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': [
            'warn',
            {
                printWidth: 80,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'none'
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
