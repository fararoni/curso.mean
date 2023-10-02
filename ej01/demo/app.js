const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
})

server.on('request', (request, response) => {
    switch (request.url) {
      case '/':
        response.end('/') 
        break;
      case '/about':
        response.end('/about') 
        break;
      case '/portafolio':
        response.end('/portafolio')
        break;
      case '/contact':
        response.end('/contact')
          break;
      default:
        response.end('No encontrado.')
    }
})
    
server.listen(3000, () => {
    console.log('server running 3000.')
})
