const http = require('http');
const fs = require('fs');

const PORT = 8080

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }) // Everything went oke, only allows text and html

    fs.readFile('hi.html', function(error, data) {
        if (error) {
            res.writeHead(404) // Html not found
            res.write('Error: File not found')
        } else {
            res.write(data) // Display html
        }
        res.end()
    })
});

server.listen(PORT, function(error) {
    if (error) {
        console.log('Something went wrong:', error)
    } else {
        console.log('Server is listening on port ' + PORT)
    }
});