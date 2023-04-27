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

// 반복문을 통해서 블럭을 100개를 만들어주시구요, 100개를 배열에다가 담아주세요.
// POW가 정확히 잘되고있는지를 한번 검증을해보시면 좋을겁니다.
// Test
