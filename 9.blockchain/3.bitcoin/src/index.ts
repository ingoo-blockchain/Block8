import { GENESIS } from "@constants/block.constants"
import Block from "@core/block/block"
import ProofOfWork from "@core/block/workproof/proofofwork"
import WorkProof from "@core/block/workproof/woorkproof"
import CryptoModule from "@core/crypto/crypto.module"

import DigitalSignature from "@core/wallet/digitalSignature"
import Transaction from "@core/transaction/transacrtion"
import { UnspentTxOut } from "@core/transaction/transaction.interface"
import Unspent from "@core/transaction/unspant"
import { Receipt } from "@core/wallet/wallet.interface"
import Wallet from "@core/wallet/wallet"

const crypto = new CryptoModule()
const digitalSignature = new DigitalSignature(crypto)
const proofofwork = new ProofOfWork(crypto)
const workProof = new WorkProof(proofofwork)
const block = new Block(crypto, workProof)
const transaction = new Transaction(crypto)
const unspent = new Unspent(transaction)
const accounts = new Wallet(digitalSignature)

const sender = accounts.create()
console.log(sender)

const recipt = accounts.receipt("0000", 30)
console.log(recipt)
