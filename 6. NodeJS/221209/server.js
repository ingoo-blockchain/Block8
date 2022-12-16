const net = require("net")
const resFn = require("./lib/res")
const reqFn = require("./lib/req")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client) => {
    client.setEncoding("utf8")
    const res = resFn(client)
    client.on("data", (chunk) => {
        const req = reqFn(chunk)
        console.log(req) // request message

        if (req.method === "GET" && req.path === "/") {
            console.log(req.query)
            res.send("hello index.html")
        } else if (req.method === "GET" && req.path === "/list") {
            res.send("hello list.html")
        } else if (req.method === "GET" && req.path === "/write") {
            res.send("hello write.html")
        } else {
            res.send("Not found")
        }
    })
})

server.on("connection", () => {
    console.log("connected to client")
})

server.listen(PORT, HOST, () => {
    console.log(`server start`)
})
