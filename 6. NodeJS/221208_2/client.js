const net = require("net")
const { incodeMesage: requestMessage, decodeMessage: b } = require("./lib/message")

const config = { port: 3000, host: "127.0.0.1" }
const socket = net.connect(config)

socket.on("connect", () => {
    console.log("connected to server")
    const message = {
        reply: true,
        "content-type": "json",
        body: "{name:'ingoo', age:'32'}",
    }
    socket.write(requestMessage(message))
})
