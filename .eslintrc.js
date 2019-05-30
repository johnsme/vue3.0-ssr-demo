module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"], //@vue/standard
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "eslint-disable-next-line": 'off',
    "prefer-promise-reject-errors": 'off'
  },
  parserOptions: {
    parser: "babel-eslint",
    // sourceType:'module'
  }
};