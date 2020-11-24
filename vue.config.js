module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Vincent Massey 7 Week Challenge'
                return args
            })
    }
}