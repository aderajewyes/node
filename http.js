
const http = require('http');
const server = http.createServer((req,res) => {
if (req.url === '/'){
res.write('welcome to server side programming!')}
res.end()
})

server.listen(5000)