module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Vincent Massey Seven Week Challenge'
                return args
            })
    }
}