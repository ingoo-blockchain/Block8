import { IBlock } from "@core/block/block.interface"
import { Receipt, TransactionRow, TxIn, TxOut } from "./transaction.interface"
import CryptoModule from "@core/crypto/crypto.module"
import { SignatureInput } from "elliptic"

class Transaction {
    private readonly REWARD = 50

    constructor(private readonly crypto: CryptoModule) {}

    create(receipt: Receipt) {
        const totalAmount = 50
        const txin1 = this.createTxIn(1, "", receipt.signature)

        const txout_sender = this.createTxOut(receipt.sender.account, totalAmount - receipt.amount)
        const txout_recevied = this.createTxOut(receipt.received, receipt.amount)

        return this.createRow([txin1], [txout_sender, txout_recevied])
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
}

export default Transaction
