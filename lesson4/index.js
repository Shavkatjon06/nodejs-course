const {createServer} = require("http")
const fs = require("fs")

const html = fs.readFileSync("./home.html", "utf-8")

const server = createServer((req, res) => {
    const path = req.url.toLocaleLowerCase()
    if (path == '/' || path === "/home") {
        res.end(html.replace("{{%Content%}}", "You are in Home page"))
    } else if (path === "/about") {
        res.end(html.replace("{{%Content%}}", "You are in About page"))
    } else {
        res.end(html.replace("{{%Content%}}", "404 Page not found"))
    }
})

server.listen(8000, () => {
    console.log("Server has started.")
})