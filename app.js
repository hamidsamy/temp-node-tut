const http = require('http');

const server = http.createServer((req, res) => {
    res.write('welcome to new server');
    res.end();
})

server.listen(5000);