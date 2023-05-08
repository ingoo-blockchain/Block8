import { IBlock } from "@core/block/block.interface"
import { TransactionData, TransactionPool, TransactionRow, TxIn, TxOut, UnspentTxOut } from "./transaction.interface"
import CryptoModule from "@core/crypto/crypto.module"
import { SignatureInput } from "elliptic"
import { Receipt } from "@core/wallet/wallet.interface"

class Transaction {
    private readonly REWARD = 50
    private readonly transactionPool: TransactionPool = []
    constructor(private readonly crypto: CryptoModule) {}

    getPool() {
        return this.transactionPool
    }

    create(receipt: Receipt, myUnspantTxOuts: UnspentTxOut[]) {
        if (!receipt.signature) throw new Error("서명이 존재하지 않습니다.")

        // balance: 50
        const [txIns, balance] = this.createInput(myUnspantTxOuts, receipt.amount, receipt.signature)
        const txOuts = this.createOutput(receipt.received, receipt.amount, receipt.sender.account, balance)
        const transaction: TransactionRow = {
            txIns,
            txOuts,
        }

        transaction.hash = this.serilizeRow(transaction)
        this.transactionPool.push(transaction)
        return transaction
    }

    createOutput(received: string, amount: number, sender: string, balance: number) {
        const txouts: TxOut[] = []
        txouts.push({ account: received, amount })

        //
        if (balance - amount > 0) {
            txouts.push({ account: sender, amount: balance - amount })
        }

        const outAmount = txouts.reduce((acc, txout: TxOut) => acc + txout.amount, 0)
        if (balance !== outAmount) throw new Error("금액 오류")

        return txouts
    }

    createInput(myUnspantTxOuts: UnspentTxOut[], receiptAmount: number, signature: SignatureInput): [TxIn[], number] {
        let targetAmount = 0

        const txins = myUnspantTxOuts.reduce((acc: TxIn[], unspentTxOut: UnspentTxOut) => {
            const { amount, txOutId, txOutIndex } = unspentTxOut
            if (targetAmount >= receiptAmount) return acc

            targetAmount += amount
            acc.push({ txOutIndex, txOutId, signature })

            return acc
        }, [] as TxIn[])

        return [txins, targetAmount]
    }

    createTxOut(account: string, amount: number): TxOut {
        if (account.length !== 40) throw new Error("Account 형식이 옳바르지 않습니다.")
        const txout = new TxOut()
        txout.account = account
        txout.amount = amount
        return txout
    }

    serializeTxOut(txOut: TxOut): string {
        const { account, amount } = txOut
        const text = [account, amount].join("")
        // console.log(this)
        return this.crypto.SHA256(text)
    }

    createTxIn(txOutIndex: number, txOutId?: string, signature?: SignatureInput): TxIn {
        const txIn = new TxIn()
        txIn.txOutIndex = txOutIndex
        txIn.txOutId = txOutId
        txIn.signature = signature
        return txIn
    }

    serializeTxIn(txIn: TxIn): string {
        const { txOutIndex } = txIn
        const text = [txOutIndex].join("")

        return this.crypto.SHA256(text)
    }

    serilizeTx<T>(data: T[], callback: (item: T) => string) {
        return data.reduce((acc: string, item: T) => acc + callback(item), "")
    }

    serilizeRow(row: TransactionRow) {
        const { txIns, txOuts } = row

        const text1 = this.serilizeTx<TxOut>(txOuts, (item) => this.serializeTxOut(item))
        const text2 = this.serilizeTx<TxIn>(txIns, (item) => this.serializeTxIn(item))

        return this.crypto.SHA256(text1 + text2)
    }

    createRow(txIns: TxIn[], TxOuts: TxOut[]) {
        const transactionRow = new TransactionRow()
        transactionRow.txIns = txIns
        transactionRow.txOuts = TxOuts
        transactionRow.hash = this.serilizeRow(transactionRow)
        return transactionRow
    }

    // Tx
    createCoinbase(account: string, latestBlockHeight: number) {
        const txin = this.createTxIn(latestBlockHeight + 1)
        const txout = this.createTxOut(account, this.REWARD)
        return this.createRow([txin], [txout])
    }

    update(transaction: TransactionRow) {
        const findCallback = (tx: TransactionRow) => transaction.hash === tx.hash
        const index = this.transactionPool.findIndex(findCallback)
        if (index !== -1) this.transactionPool.splice(index, 1)
    }

    sync(transactions: TransactionData) {
        if (typeof transactions === "string") return
        transactions.forEach(this.update.bind(this))
    }
}

export default Transaction
