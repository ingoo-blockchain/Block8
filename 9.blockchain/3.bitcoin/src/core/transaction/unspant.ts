import { Receipt } from "@core/wallet/wallet.interface"
import Transaction from "./transacrtion"
import { TransactionData, TransactionRow, TxIn, TxOut, UnspentTxOut, UnspentTxOutPool } from "./transaction.interface"
import { SignatureInput } from "elliptic"

// UnspentTxOutPool -> UnspentTxOut[]
// UnspentTxOut[]
class Unspent {
    private readonly unspentTxOuts: UnspentTxOutPool = []
    constructor() {}

    // getter
    getUnspentTxPool() {
        return this.unspentTxOuts
    }

    delete(txin: TxIn) {
        const { txOutId, txOutIndex } = txin
        const index = this.unspentTxOuts.findIndex((unspentTxOut: UnspentTxOut) => {
            return unspentTxOut.txOutId === txOutId && unspentTxOut.txOutIndex === txOutIndex
        })

        if (index !== -1) this.unspentTxOuts.splice(index, 1)
    }

    create(hash: string) {
        return (txout: TxOut, txOutIndex: number) => {
            const { amount, account } = txout
            this.unspentTxOuts.push({
                txOutId: hash,
                txOutIndex,
                account,
                amount,
            })
        }
    }

    sync(transactions: TransactionData) {
        if (typeof transactions === "string") return

        transactions.forEach(this.update.bind(this))
    }

    update(transaction: TransactionRow): void {
        const { txIns, txOuts, hash } = transaction
        if (!hash) throw new Error("Hash 값이 존재하지 않습니다.")

        txOuts.forEach(this.create(hash))
        txIns.forEach(this.delete.bind(this))
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

    // 30 50 <-- account: a
    // 30 / 12 15 13 15 63
    getInput(myUnspantTxOuts: UnspentTxOut[], receiptAmount: number, signature: SignatureInput) {
        let targetAmount = 0

        const txins = myUnspantTxOuts.reduce((acc: TxIn[], unspentTxOut: UnspentTxOut) => {
            const { amount, txOutId, txOutIndex } = unspentTxOut
            if (targetAmount >= receiptAmount) return acc

            targetAmount += amount
            acc.push({ txOutIndex, txOutId, signature })

            return acc
        }, [] as TxIn[])

        return txins
    }

    // 보내는사람 주소, 보낼 금액, 나의 주소, 나의 금액
    getOutput(received: string, amount: number, sender: string, balance: number) {
        const txouts: TxOut[] = []
        txouts.push({ account: received, amount })

        if (balance > 0) {
            txouts.push({ account: sender, amount: balance })
        }

        return txouts
    }
}

export default Unspent
