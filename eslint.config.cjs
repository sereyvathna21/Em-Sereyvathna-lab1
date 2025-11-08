/**
 * Minimal ESLint flat config for CI (ESLint v9+)
 * - Ignores node_modules
 * - Applies basic recommended rules to .js files
 * - Declares common Mocha globals so test files don't error
 */
module.exports = [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Mocha globals used by tests
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    settings: {},
    rules: {
      // keep it lightweight for CI; enable recommended issues
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
      "no-undef": "error",
      "no-console": "off",
    },
  },
];
