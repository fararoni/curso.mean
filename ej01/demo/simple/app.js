const http = require('http')
const fs = require ('fs')
const dir = './public/'
const port = process.env.PORT | 3000

const server = http.createServer((req, res)=>{
    console.log(req.url)
    switch (req.url) {
        case '/':
          render(res, 'index.html')
          break;
        case '/about':
            render(res, 'about.html') 
          break;
        case '/contact':
            render(res,'contact.html')
            break;
        default:
          res.writeHead(404, {'Content-type' : 'text/html'})
          res.end('<h1> 404 File not found .</>')
    }
        
}).listen(port, () => {
    console.log(`http://localhost:${port}`)
})

const render = (res, file) => {
    console.log(dir + file)
    fs.readFile(dir + file, (err, data) =>{
        if ( err) {
            res.writeHead(404, {'Content-type' : 'text/html'})
            res.end('<h1> 404 File not found..</>')
        }
        res.writeHead(202, {'Content-type' : 'text/html'})
        return res.end(data)
    })
}