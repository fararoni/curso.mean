const http = require('http')
let count = 0
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    console.log('Head.')
}).on('request', (req, res) => {
    console.log('Request.')
    count ++
    res.end(`Solicitud ${count} recibida ! ` )
})
server.listen(8000)
console.log('server running: 8000.')

const server2 = http.createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];

    const responseBody = { headers, method, url, body, count };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(responseBody));
    res.end();
}).on('error', err => {
    console.error(`Server 2 error ${err}  ! `);
});
server2.listen(8008)  
console.log('server running 8008.')