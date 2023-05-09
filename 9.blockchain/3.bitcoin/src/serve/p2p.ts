import net, { Socket } from "net"
import { MessageData } from "./network.interface"
import { IBlock } from "@core/block/block.interface"
import Message from "./message"

// (socket: Socket) => {
//     console.log(socket.remotePort)
//     console.log("connection")
//     socket.write("hello?")

//     socket.on("data", (data: Buffer) => {
//         console.log(data.toString("utf8"))
//         const message = JSON.parse(data.toString("utf8"))
//         message.payload // block
//     })
// }

// () => {
//     console.log(socket.remotePort)
//     console.log("connect")

//     socket.on("data", (data: Buffer) => {
//         console.log(data)
//         console.log(data.toString("utf8"))

//         const message: MessageData = {
//             type: "latestBlock",
//             payload: {} as IBlock,
//         }
//         const messageString = JSON.stringify(message)

//         socket.write(messageString)
//     })
// }

class P2PNetwork {
    private readonly sockets: Socket[] = []
    constructor(private readonly message: Message) {}
    // server
    public listen(port: number) {
        const connection = (socket: Socket) => this.handleConnection(socket)
        const server = net.createServer(connection)
        server.listen(port)
    }

    // client
    public connet(port: number, host: string) {
        const socket = new net.Socket()
        const connection = () => this.handleConnection(socket)
        socket.connect(port, host, connection)
    }

    private handleConnection(socket: Socket) {
        console.log(`[+] New Connection from ${socket.remoteAddress}:${socket.remotePort}`)
        this.sockets.push(socket)

        // 하드코딩
        const dataCallback = (data: Buffer) => this.message.handler(socket, data)
        socket.on("data", dataCallback)

        const message: MessageData = {
            type: "latestBlock",
            payload: {} as IBlock,
        }
        socket.write(JSON.stringify(message))

        const disconnect = () => this.handleDisconnect(socket)
        socket.on("close", disconnect)
        socket.on("error", disconnect)
    }

    private handleDisconnect(socket: Socket) {
        const index = this.sockets.indexOf(socket)
        if (index === -1) return

        this.sockets.splice(index, 1)
        console.log(`[-] Connection from ${socket.remoteAddress}:${socket.remotePort} closed`)
    }
}

export default P2PNetwork
