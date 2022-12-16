const net = require("net")
const resFn = require("./lib/res")
const reqFn = require("./lib/req")
const static = require("./lib/static")
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client) => {
    client.setEncoding("utf8")

    client.on("data", (chunk) => {
        const req = reqFn(chunk) // string -> object
        const res = resFn(client, req)
        res.send("hello ingoo!")
        for (const path in static) {
            if (req.method === "GET" && req.path === path) {
                res.sendStatic(path)
            }
        }

        if (req.method === "GET" && req.path === "/") {
            // req.query.name
            const name = req.query?.name
            res.sendFile("index.html", { name: name, title: "메인페이지 입니다." })
        } else if (req.method === "GET" && req.path === "/list") {
            res.sendFile("list.html")
        } else if (req.method === "GET" && req.path === "/view") {
            res.sendFile("view.html")
        } else if (req.method === "GET" && req.path === "/write") {
            res.sendFile("write.html")
        } else if (req.method === "GET" && req.path === "/modify") {
            res.sendFile("modify.html")
        } else if (req.method === "POST" && req.path === "/write") {
            req.body.subject
        }
        // else if (req.method === 'GET' && req.path === '/css/index.css' ) {
        //     // localhost:3000/css/index.css
        //     res.sendStatic('/css/index.css')
        // } else if (req.method === 'GET' && req.path === '/js/index.js') {
        //     res.sendStatic('/js/index.js')
        // }
    })
})

server.on("close", () => {
    console.log("연결끊김")
})

server.on("connection", () => {
    console.log(`connected to client`)
})

server.listen(PORT, HOST, () => {
    console.log(`server start`)
})
