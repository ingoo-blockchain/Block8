import Block from "@core/block/block"
import ProofOfWork from "@core/block/workproof/proofofwork"
import WorkProof from "@core/block/workproof/woorkproof"
import Chain from "@core/chain/chain"
import CryptoModule from "@core/crypto/crypto.module"
import Ingchain from "@core/ingchain"
import Transaction from "@core/transaction/transacrtion"
import Unspent from "@core/transaction/unspant"
import DigitalSignature from "@core/wallet/digitalSignature"
import Wallet from "@core/wallet/wallet"
import App from "@serve/app"
import Message from "@serve/message"
import P2PNetwork from "@serve/p2p"

const chain = new Chain()

const crypto = new CryptoModule()
const proof = new ProofOfWork(crypto)
const workproof = new WorkProof(proof)
const transaction = new Transaction(crypto)

const block = new Block(crypto, workproof)
const unspent = new Unspent()

const digitalSignature = new DigitalSignature(crypto)
const accounts = new Wallet(digitalSignature)

const web7722 = new Ingchain(chain, block, transaction, unspent, accounts)

const app = App(web7722)

// app.listen(8545, () => {
//     console.log(`server start`)
// })

const { account } = accounts.create()

web7722.mineBlock(account)

const message = new Message(web7722)
const p2p = new P2PNetwork(message)
p2p.listen(8555)
