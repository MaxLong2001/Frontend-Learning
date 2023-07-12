const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }

    devServer: {
        proxy: {
            '/maxlong': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/maxlong': ''},
                ws: true, // proxy websockets
                changeOrigin: true // needed for virtual hosted sites
            },
            '/diana': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/diana': ''},
                ws: true, // proxy websockets
                changeOrigin: true // needed for virtual hosted sites
            }
        }
    }
})
