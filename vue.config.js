const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "~@/styles/variables.sass"
        @import "~@/styles/shared.sass"
        @import "~@/styles/css-vars.sass"`,
      },
    },
  },
})
