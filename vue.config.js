
const path = require('path')

module.exports = {
  lintOnSave: false,
  // 按需修改即可
  publicPath: 'https://chenboxuan.github.io/vue-os/dist/',

  chainWebpack: config => {
    // 自动化导入css文件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))

    // 路径别名
    config.resolve.alias
      .set('@assets', resolve('src/assets'))
      .set('@axios', resolve('src/axios'))
      .set('@styles', resolve('src/styles'))
      .set('@libs', resolve('src/libs'))
  },

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            
          },
          javascriptEnabled: true,
        },
      },
    },
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/theme.less'),
      ],
    })
}

function resolve (dir) {
  return path.join(__dirname, dir)
}