const net = require("net")
const message = require("./lib/res")
const reqParser = require("./lib/req")
const static = require('./lib/static')
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client) => {
    client.setEncoding("utf8")

    client.on("data", (chunk) => {
        const req = reqParser(chunk)
        const res = message(client, req)
        const public = static('../public')

        for( const key in public ) {
            if(req.method === 'GET' && req.path === key) {
                res.sendStatic(key,req)
            }
        }

        // http://127.0.0.1:3000 /
        if (req.method === "GET" && req.path === "/") {
            res.send("<h1>Hello World!<a href='/user'>user</a></h1>")
        // http://127.0.0.1:3000/user
        } else if (req.method === "GET" && req.path === "/user") {
            const name = req.query?.name
            console.log(req, name)
            res.sendFile("index.html", { name, title: "homepage" })
        } else if(req.method === 'POST' && req.path === '/user') {
            console.log('req: ',req)
            const subject = req.body?.subject
            res.redirect(`/user?name=${subject}`)
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
