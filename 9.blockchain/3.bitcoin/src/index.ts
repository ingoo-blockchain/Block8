import { GENESIS } from "@constants/block.constants"
import Block from "@core/block/block"
import ProofOfWork from "@core/block/workproof/proofofwork"
import WorkProof from "@core/block/workproof/woorkproof"
import CryptoModule from "@core/crypto/crypto.module"

console.log(`hello bitcoin sample`)

// 100개~1000개

const crypto = new CryptoModule()
const proofofwork = new ProofOfWork(crypto)
const workProof = new WorkProof(proofofwork)
const block = new Block(crypto, workProof)

const block1 = block.createBlock(GENESIS, "asdfasdf", GENESIS)
console.log(block1)
