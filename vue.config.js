module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Quipu: keep-u your money";
        return args;
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/shared.scss";
        `
      },
    },
  }
}
