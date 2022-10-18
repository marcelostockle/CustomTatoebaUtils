const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use(createProxyMiddleware('/en/sentences/random/:lang', 
    {
        target: "https://tatoeba.org",
        changeOrigin: true
    }))
}