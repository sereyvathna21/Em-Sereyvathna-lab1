module.exports = {
  env: {
    node: true,
    es2021: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // keep defaults; project can opt-in to stricter rules later
  },
};
