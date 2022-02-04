const http = require("http");
const { getAllUsers, getUser,addUser } = require('./app/user/api/users.js');


const server = http.createServer((req, res) => {
    try {
        const [url,query]=req.url.split("?")
        if (req.url === "/users"&&req.method=="GET") {
            res.writeHead(200)
        res.end(JSON.stringify(getAllUsers()))
        }
        else if (req.url.startsWith('/users/')) {
            const id = req.url.split('/')[2]
            console.log(id);
            res.writeHead(200)
        res.end(JSON.stringify(getUser(id)))
        }
       // console.log(req.url, req.method)
        else if (req.method=="POST") {
          //  const name = req.url.split("=")[1]
         // const url = 'https://localhost:3002/users?'
            console.log(url,query)
          const search = new URLSearchParams(query)
          const q = search.get('name')
          console.log('q',q)
          //  console.log(name)
            res.writeHead(201)
            res.end(JSON.stringify(addUser(q)))
        }
        
    }
    catch {
        console.log(" some error")
        res.writeHead(501)
        res.end("Error")
    }
})

server.listen(3002)



