import Block from "./block/block"
import Chain from "./chain/chain"
import Transaction from "./transaction/transacrtion"
import Unspent from "./transaction/unspant"
import Wallet from "./wallet/wallet"
import { Receipt } from "./wallet/wallet.interface"

class Ingchain {
    constructor(public readonly chain: Chain, private readonly block: Block, private readonly transaction: Transaction, private readonly unspent: Unspent, public readonly accounts: Wallet) {}

    public mineBlock(account: string) {
        // 이전블록 , 트랜잭션,  10번째 블록
        const latestBlock = this.chain.latestBlock() // 100
        const adjustmentBlock = this.chain.getAdjustmentBlock()

        const transactions = this.transaction.getPool() // [tx]
        const coinbase = this.transaction.createCoinbase(account, latestBlock.height)
        const newBlock = this.block.mine(latestBlock, [coinbase, ...transactions], adjustmentBlock)
        this.chain.addToChain(newBlock)

        console.info(`블럭이 생성되었습니다.`)
        this.unspent.sync(newBlock.data)
        this.transaction.sync(newBlock.data)

        return this.chain.latestBlock()
    }

    public sendTransaction(receipt: Receipt) {
        const isVerify = this.accounts.verify(receipt)
        if (!isVerify) throw Error("옳바르지 않은 영수증입니다.")

        const myUnspantTxOuts = this.unspent.me(receipt.sender.account)
        const balance = this.unspent.getAmount(myUnspantTxOuts)
        if (balance < receipt.amount) throw Error("잔액이 부족합니다.")

        const tx = this.transaction.create(receipt, myUnspantTxOuts)
    }

    public getBalance(account: string) {
        const myUnspantTxOuts = this.unspent.me(account)
        const balance = this.unspent.getAmount(myUnspantTxOuts)

        return balance
    }
}

export default Ingchain
