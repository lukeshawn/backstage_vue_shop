module.exports = {
    // 禁用eslint
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    //自动更新上线
    devServer: {
        open: true,
        port: 8878,
        overlay: {
            warnings: true,
            errors: true
          }
    }
}