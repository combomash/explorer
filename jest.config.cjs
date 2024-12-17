module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'jest-esm-transformer',
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.json',
            },
        ],
    },
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
};
