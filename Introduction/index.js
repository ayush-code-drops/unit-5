const sum = require('./sum.js');
const http=require('http')
console.log(sum(5, 10))


const server=http.createServer((req, res) => {
    try {
       res.writeHead(200)
    res.end("Hello World")
    }
    catch {
        res.writeHead(501)
        res.end("Error")
    }
    
})

server.listen(3001)

