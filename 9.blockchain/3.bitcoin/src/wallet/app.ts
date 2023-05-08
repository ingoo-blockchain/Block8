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

    app.post("/wallet", (req, res) => {
        const account = accounts.create()
        res.json(account)
    })

    app.get("/wallet", (req, res) => {
        const accountList = accounts.getAccounts()
        res.json(accountList)
    })

    return app
}
