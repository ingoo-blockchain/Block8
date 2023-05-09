import Ingchain from "@core/ingchain"
import { Socket } from "net"
import { MessageData, Payload } from "./network.interface"

class Message {
    constructor(private readonly blockchain: Ingchain) {}
    handler(socket: Socket, data: Buffer) {
        console.log(data.toString("utf8"))
        const { type, payload } = JSON.parse(data.toString("utf8"))
        const message = (this as any)[type](payload)
        if (!message) return
        socket.write(message)
        socket.end()
    }

    private latestBlock(payload: Payload): string | undefined {
        const message: MessageData = {
            type: "allBlock",
            payload: this.blockchain.chain.latestBlock(),
        }

        return JSON.stringify(message)
    }
    private allBlock(payload: Payload): string | undefined {
        console.log(payload)
        return
    }
}

export default Message
