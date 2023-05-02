import Transaction from "./transacrtion"
import { Receipt, TransactionRow, TxIn, TxOut, UnspentTxOut, UnspentTxOutPool } from "./transaction.interface"

// UnspentTxOutPool -> UnspentTxOut[]
// UnspentTxOut[]
class Unspent {
    private readonly unspentTxOuts: UnspentTxOutPool = []
    constructor(private readonly transaction: Transaction) {}

    // getter
    getUnspentTxPool() {
        return this.unspentTxOuts
    }

    delete(txin: TxIn) {
        const index = this.unspentTxOuts.findIndex((utxo) => {
            return utxo.txOutId === txin.txOutId && utxo.txOutIndex === txin.txOutIndex
        })

        this.unspentTxOuts.splice(index)
    }

    createUTXO(transaction: TransactionRow): void {
        const { hash, txOuts } = transaction
        if (!hash) throw new Error("hash 값이 존재하지 않습니다.")

        // transaction . txin 삭제하는
        transaction.txIns.forEach((v) => this.delete(v))

        // transaction . txout 생성

        const newUnspentTxOut = txOuts.map((txout: TxOut, index: number) => {
            const unspentTxOut = new UnspentTxOut()
            unspentTxOut.txOutId = hash
            unspentTxOut.txOutIndex = index
            unspentTxOut.account = txout.account
            unspentTxOut.amount = txout.amount
            return unspentTxOut
        })

        this.unspentTxOuts.push(...newUnspentTxOut)
    }

    me(account: string): UnspentTxOut[] {
        const myUnspantTxOuts = this.unspentTxOuts.filter((utxo) => utxo.account === account)
        return myUnspantTxOuts
    }

    getAmount(myUnspantTxOuts: UnspentTxOut[]) {
        return myUnspantTxOuts.reduce((acc, utxo) => acc + utxo.amount, 0)
    }

    isAmount(account: string, sendAmount: number) {
        const myUnspantTxOuts = this.me(account)
        const totalAmount = this.getAmount(myUnspantTxOuts)
        if (totalAmount < sendAmount) return true
        return false
    }

    getInput(receipt: Receipt) {
        const {
            sender: { account },
            amount, // 30
        } = receipt

        const myUnspantTxOuts = this.me(account) // [{amount:10},{amount:10},{amount:10},{amount:10}]

        let targetAmount = 0 // 30
        let txins = [] // [{amount:10},{amount:10},{amount:10}]
        for (const unspentTxOut of myUnspantTxOuts) {
            targetAmount += unspentTxOut.amount
            const txin = this.transaction.createTxIn(unspentTxOut.txOutIndex, unspentTxOut.txOutId, receipt.signature)
            txins.push(txin)
            if (targetAmount >= amount) break
        }

        return txins
    }

    getOutput(receipt: Receipt) {
        const {
            sender: { account },
            received,
            amount,
        } = receipt
        const txOuts = []
        // 받는 사람에 대한 txout
        const totalAmount = this.getAmount(this.me(account))
        const received_txout = this.transaction.createTxOut(received, amount)
        txOuts.push(received_txout)

        if (totalAmount - amount > 0) {
            const sender_txout = this.transaction.createTxOut(account, totalAmount - amount)
            txOuts.push(sender_txout)
        }

        return txOuts
    }
}

export default Unspent
