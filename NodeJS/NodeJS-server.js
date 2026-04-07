const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    } else if (req.url === "/user") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ name: "ABC", age: 20 }))
    } else {
        res.writeHead(404)
        res.end("Not Found")
    }
})

server.listen(3000, () => {
    console.log("Server running")
})