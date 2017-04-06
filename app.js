'use strict'

const ns = require('node-static')
const server = new (ns.Server)('./public')

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    server.serve(request, response)
  }).resume()
}).listen(8888)

console.log('Server Running @ http://localhost:8888/')
