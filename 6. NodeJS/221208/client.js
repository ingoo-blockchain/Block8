const net = require("net")
// port 3000 host : 127.0.0.1
const config = { port: 3000, host: "127.0.0.1" }
const socket = net.connect(config)

socket.on("connect", () => {
    console.log("server랑 접속됨!")

    const message1 = {
        content: "aaa",
        reply: false,
    }

    const message2 = {
        content: "bbb",
        reply: true,
    }

    socket.write(JSON.stringify(message1))
    socket.write(JSON.stringify(message2))
})

socket.on("data", (chunk) => {
    console.log(`received: ${chunk}`)
})
