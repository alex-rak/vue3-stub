module.exports = {
  root: true,
  lintOnSave: true,
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-recommended-scss",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
};
