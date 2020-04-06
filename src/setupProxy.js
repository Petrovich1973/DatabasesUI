const proxy = require('http-proxy-middleware')

const address = 'http://localhost:8090/'

module.exports = function (app) {
    app.use(
        '*api*',
        proxy({
            target: address,
            changeOrigin: true
        })
    )
}