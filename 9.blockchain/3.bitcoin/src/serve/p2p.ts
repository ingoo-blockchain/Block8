import net, { Socket } from "net"

class P2PNetwork {
    // server
    listen(port: number) {
        const server = net.createServer((socket: Socket) => {
            console.log(socket.remotePort)
            console.log("connection")

            socket.write("hello?")
        })
        console.log(`start`)
        server.listen(port)
    }

    // client
    connet(port: number, host: string) {
        const socket = new net.Socket()
        console.log(socket.remotePort)
        socket.connect(port, host, () => {
            console.log(socket.remotePort)
            console.log("connect")

            socket.on("data", (data: Buffer) => {
                console.log(data)

                console.log(data.toString("utf8"))
            })
        })
    }
}

export default P2PNetwork
