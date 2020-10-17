
const http = require('http');
const routes = require('./route')

//console.log(http);



const server = http.createServer(routes.toto)

server.listen(3000);