import Block from "./block/block"
import Chain from "./chain/chain"
import Transaction from "./transaction/transacrtion"
import Unspent from "./transaction/unspant"

class Ingchain {
    constructor(private readonly chain: Chain, private readonly block: Block, private readonly transaction: Transaction, private readonly unspent: Unspent) {}

    mineBlock(account: string) {
        // 이전블록 , 트랜잭션,  10번째 블록
        const latestBlock = this.chain.latestBlock() // 100
        const adjustmentBlock = this.chain.getAdjustmentBlock()

        const coinbase = this.transaction.createCoinbase(account, latestBlock.height)
        const newBlock = this.block.mine(latestBlock, [coinbase], adjustmentBlock)
        this.chain.addToChain(newBlock)

        console.info(`블럭이 생성되었습니다.`)

        this.unspent.sync(newBlock.data)
        return this.chain.latestBlock()
    }

    sendTransaction() {}

    getBalance(account: string) {
        const myUnspantTxOuts = this.unspent.me(account)
        const balance = this.unspent.getAmount(myUnspantTxOuts)
        return balance
    }
}

export default Ingchain
