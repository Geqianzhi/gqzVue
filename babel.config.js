const plugins = []
if (process.env.NODE_ENV === 'production') {
  // 移除console.log
  plugins.push('transform-remove-console')
}

//IE兼容处理
module.exports = {
  presets: [
    '@vue/app',
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      },
    ],

  ],
  plugins
}
