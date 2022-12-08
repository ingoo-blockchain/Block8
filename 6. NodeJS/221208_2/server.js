const net = require("net")
const message = require("./lib/res")
const reqParser = require("./lib/req")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client) => {
    client.setEncoding("utf8")

    client.on("data", (chunk) => {
        const req = reqParser(chunk)
        const res = message(client, req)
        if (req.method === "GET" && req.path === "/") {
            res.send("<h1>Hello World!</h1>")
        } else if (req.method === "GET" && req.path === "/user") {
            const name = req.query.name
            console.log(req, name)
            res.sendFile("index.html", { name, title: "homepage" })
        } else {
            res.send("Not Found")
        }
    })
})

server.on("connection", () => {
    console.log("connected to client")
})

server.listen(PORT, HOST, () => {
    console.log(`server start`)
})
