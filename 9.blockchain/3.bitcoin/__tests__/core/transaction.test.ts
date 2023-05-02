import CryptoModule from "@core/crypto/crypto.module"
import Transaction from "@core/transaction/transacrtion"

describe("Transaction", () => {
    let transaction: Transaction
    let crypto: CryptoModule

    beforeEach(() => {
        crypto = new CryptoModule()
        transaction = new Transaction(crypto)
    })

    describe("createTxOut", () => {
        const account = "0".repeat(40)
        it("TxOut 생성하기", () => {
            const amount = 50
            const txout = transaction.createTxOut(account, amount)
            console.log(txout)
            expect(txout.account).toBe(account)
            expect(txout.amount).toBe(amount)
        })

        it("TxOut account 값이 이상할경우", () => {
            const account = "0".repeat(39)
            const amount = 50
            expect(() => {
                transaction.createTxOut(account, amount)
            }).toThrowError()
        })
    })

    describe("createTxIn", () => {
        const txOutIndex = 2
        it("txIn 생성하기", () => {
            const txin = transaction.createTxIn(txOutIndex)
            console.log(txin)
            expect(txin.txOutIndex).toBe(txOutIndex)
        })
    })

    describe("createRow", () => {
        it("transactionRow 만들기", () => {
            const txOutIndex = 2
            const txin = transaction.createTxIn(txOutIndex)

            const account = "0".repeat(40)
            const amount = 50
            const txout = transaction.createTxOut(account, amount)

            const row = transaction.createRow([txin, txin, txin], [txout])

            expect(row.txIns).toStrictEqual([txin, txin, txin])
            expect(row.txOuts).toStrictEqual([txout])

            console.log(row)
        })
    })
})
