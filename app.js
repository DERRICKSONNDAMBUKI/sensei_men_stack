

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    // res.end('Hello Sensei!')
    if (req.url === '/about') {
        res.end('The about page')
    } else if(req.url==='/contact'){
        res.end('The contact page')
    }else if (req.url==='/') {
        res.end('The home page')
    } else {
        res.writeHead(404)
        res.end('Page not found')
    }
})

server.listen(3000)