/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    moduleNameMapper: {
        // Map .js imports to .ts files
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    testMatch: ['**/test/**/*.test.ts'],
}
