import P2PNetwork from "@serve/p2p"

const p2p = new P2PNetwork()
p2p.listen(8556)

p2p.connet(8555, "127.0.0.1")
