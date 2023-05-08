import Ingchain from "@core/ingchain"
import express from "express"

export default (blockchain: Ingchain) => {
    const app = express()
    app.use(express.json())

    app.get("/", (req, res) => {
        res.send("hello ingchain")
    })

    // 계정
    app.put("/accounts", (req, res) => {
        const account = blockchain.accounts.create()
        res.json({ ...account })
    })

    app.get("/accounts", (req, res) => {
        const accounts = blockchain.accounts.getAccounts()
        res.json(accounts)
    })

    // 채굴
    app.post("/mineBlock", (req, res) => {
        const { account } = req.body
        const newBlock = blockchain.mineBlock(account)

        res.json(newBlock)
    })

    app.post("/getBalance", (req, res) => {
        const { account } = req.body
        const balance = blockchain.getBalance(account)

        res.json({
            balance,
        })
    })

    app.post("/transaction", (req, res) => {
        const { receipt } = req.body

        const transaction = blockchain.sendTransaction(receipt)
        res.json({
            transaction,
        })
    })

    return app
}
