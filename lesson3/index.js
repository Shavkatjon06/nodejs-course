// createServer() creates a new HTTP server and returns it
const {createServer} = require("http")

const port = 3000
const hostname = '127.0.0.1'

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World!")
})

// our server listens on the specified post and host name
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})