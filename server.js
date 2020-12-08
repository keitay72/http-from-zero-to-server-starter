const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200)
    res.end();
}).listen(3000, function() {
    console.log('Listening for requests on port 3000...')
});

