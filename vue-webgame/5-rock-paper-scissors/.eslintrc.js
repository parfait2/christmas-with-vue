module.exports = {
    extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
    },
    env: {
        browser: true,
        node: true,
    },
};
