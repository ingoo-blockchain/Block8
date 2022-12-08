const net = require("net") // TCP net  client, server
const port = process.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST || "127.0.0.1"
const server = net.createServer((client) => {
    client.setEncoding("utf8")
    client.on("data", (chunk) => {
        console.log(chunk) // {"content":"aaa","reply":false} ,  {"content":"bbb","reply":true}
        const data = JSON.parse(chunk) // {"content":"aaa","reply":false}
        console.log(data.content)
        if (data.reply) {
            client.write("ccc")
        }
    })
}) // 여기에 진짜 TCP통신할 메서드들이 담겨져있음

server.on("connection", () => {
    console.log("클라이언트가 접속함!")
})

server.listen(port, host, () => {
    console.log(`server start`)
})
