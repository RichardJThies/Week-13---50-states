// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {//tells vue dev server to send any API requests to an address that begins with this code, to the web server.
    proxy: 'http://127.0.0.1:3000' //While web server is running-> "http://127.0.0.1:3000" + "/api/states" = "http://127.0.0.1:3000/api/states"
  }
}
