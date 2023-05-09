import express from "express"
import nunjucks from "nunjucks"
import axios from "axios"
import path from "path"
import Wallet from "@core/wallet/wallet"

export default (accounts: Wallet) => {
    const app = express()
    const viewDir = path.join(__dirname, "views")

    app.use(express.json())
    app.set("view engine", "html")
    nunjucks.configure(viewDir, {
        express: app,
    })

    app.get("/", (req, res) => {
        res.render("index")
    })

    app.post("/wallet", async (req, res) => {
        const account = accounts.create() //{ }
        const {
            data: { balance },
        } = await axios.post("http://127.0.0.1:8545/getBalance", {
            account: account.account,
        })

        res.json({
            ...account,
            balance,
        })
    })

    app.get("/wallet", (req, res) => {
        const accountList = accounts.getAccounts()
        res.json(accountList)
    })

    app.get("/wallet/:account", async (req, res) => {
        console.log()
        const account = accounts.get(req.params.account)
        const {
            data: { balance },
        } = await axios.post("http://127.0.0.1:8545/getBalance", {
            account: account.account,
        })

        res.json({
            ...account,
            balance,
        })
    })

    app.post("/transaction", async (req, res) => {
        try {
            const { sender, received, amount } = req.body
            const { publicKey, privateKey } = accounts.get(sender)

            const receipt = accounts.sign(
                {
                    sender: {
                        account: sender,
                        publicKey,
                    },
                    received,
                    amount,
                },
                privateKey
            )

            const tx = await axios.post("http://127.0.0.1:8545/transaction", { receipt })
            res.json(tx)
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500).end()
        }
    })

    return app
}
