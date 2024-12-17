module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'jest-esm-transformer',
    },
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.json',
        },
    },
};
