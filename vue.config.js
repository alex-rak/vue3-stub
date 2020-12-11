module.exports = {
  lintOnSave: true,

  devServer: {
    open: true,
    watchOptions: {
      poll: true,
    },
    // proxy: ''
  },

  pluginOptions: {
    lintOnSave: true,
    lintStyleOnBuild: false,
    stylelint: {},
  },
};
