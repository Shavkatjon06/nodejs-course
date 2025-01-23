const {createServer} = require("http")

const server = createServer((req, res) => {
    const path = req.url.toLocaleLowerCase()
    if (path == '/' || path === "/home") {
        res.end("You're in home page.")
    } else if (path === "/about") {
        res.end("You're in about page.")
    } else {
        res.end("Error 404: Page not found.")
    }
})

server.listen(8000, () => {
    console.log("Server has started.")
})