
const http = require("http")

const server = http.createServer((req, res)=>{

    if(req.url == '/home') {

        // res.write("Hello World")

        res.write('<h1>Welcome to http server</h1>')
        
        res.end();
    }


})

server.listen(3000)

console.log("Server is running on port 3000")