import { GENESIS } from "@constants/block.constants"
import Block from "@core/block/block"
import ProofOfWork from "@core/block/workproof/proofofwork"
import WorkProof from "@core/block/workproof/woorkproof"
import CryptoModule from "@core/crypto/crypto.module"

import DigitalSignature from "@core/transaction/digitalSignature"
import Transaction from "@core/transaction/transacrtion"
import { Receipt, UnspentTxOut } from "@core/transaction/transaction.interface"
import Unspent from "@core/transaction/unspant"

// console.log(`hello bitcoin sample`)

// 100개~1000개

const crypto = new CryptoModule()
const digitalSignature = new DigitalSignature(crypto)
const proofofwork = new ProofOfWork(crypto)
const workProof = new WorkProof(proofofwork)
const block = new Block(crypto, workProof)
const transaction = new Transaction(crypto)
const unspent = new Unspent(transaction)

// const block1 = block.createBlock(GENESIS, "asdfasdf", GENESIS)
// console.log(block1)

// 제네시스

// 코인베이스
const privateKey = "ce0ab37d10335fed2559ff4c5b056210d02ea338b591a81c3af9751be40ac64c"
const publicKey = digitalSignature.createPublicKey(privateKey)
const account = digitalSignature.createAccount(publicKey)

// Tx
const coinbase2 = transaction.createCoinbase(account, GENESIS.height)
unspent.createUTXO(coinbase2) // [객체]
// console.log(unspent.getUnspentTxPool())
const block2 = block.mine(GENESIS, [coinbase2], GENESIS)

// console.log(block2)

// #3
// 이전블럭       : 높이가 2인블럭
// 10번째 전블럭  : 제네시스

// 3번째 블럭에 Transaction 넣기
const receipt: Receipt = {
    sender: {
        //보내는사람
        account,
        publicKey,
    },
    received: "0".repeat(40), // 받는사람
    amount: 30,
    signature: "0000",
}

// 보내느사람이 amount값이 30보다 많니 ?
const flag = unspent.isAmount(account, receipt.amount)
if (flag) console.log(`잔액부족`)

// TxIn
// 미사용객체에서부터 만들어진것 -> unspent
// unspent.getUnspentTxPool() 에서부터 sender입장에서 보낼 미사용객체를 뽑아야합니다.
// 보낼사람의 미사용객체 뽑기
// 내가 보낼 amount값이랑 얼추 비슷한 금액을 만들어야합니다.

// 세욱 10,10
// getInput()

const txin1 = unspent.getInput(receipt)
const txout1 = unspent.getOutput(receipt)
const tx1 = transaction.createRow(txin1, txout1)

unspent.createUTXO(tx1)

const tx2 = transaction.create(receipt)
unspent.createUTXO(tx2)

console.log(unspent.getUnspentTxPool())

const coinbase3 = transaction.createCoinbase(account, block2.height)
const block3 = block.mine(block2, [coinbase3, tx1, tx2], GENESIS)

// console.log(block3)
