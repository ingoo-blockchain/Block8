import DigitalSignature from "./digitalSignature"
import { Accounts, Receipt } from "./wallet.interface"

class Wallet {
    private readonly accounts: Accounts[] = []
    constructor(private readonly digitalSignature: DigitalSignature) {}

    public create(): Accounts {
        const privateKey = this.digitalSignature.createPrivateKey()
        const publicKey = this.digitalSignature.createPublicKey(privateKey)
        const account = this.digitalSignature.createAccount(publicKey)

        const accounts: Accounts = {
            account,
            publicKey,
            privateKey,
        }

        this.accounts.push(accounts)
        return accounts
    }

    public set(privateKey: string) {
        const publicKey = this.digitalSignature.createPublicKey(privateKey)
        const account = this.digitalSignature.createAccount(publicKey)

        const accounts: Accounts = {
            account,
            publicKey,
            privateKey,
        }

        this.accounts.push(accounts)
        return accounts
    }

    public getAccounts() {
        const accounts = this.accounts.map((v) => v.account)
        return accounts
    }

    public get(account: string): Accounts {
        const [response] = this.accounts.filter((v) => v.account === account)
        return response
    }

    private getPrivate(account: string): string {
        return this.accounts.filter((v) => v.account === account)[0].privateKey
    }

    public receipt(received: string, amount: number) {
        const { account, publicKey, privateKey } = this.accounts[0]

        const sender = {
            account,
            publicKey,
        }

        const reciept = this.digitalSignature.sign(privateKey, {
            sender,
            received,
            amount,
        })

        return reciept
    }

    public sign(receipt: Receipt, privateKey: string) {
        return this.digitalSignature.sign(privateKey, receipt)
    }

    public verify(receipt: Receipt): boolean {
        return this.digitalSignature.verify(receipt)
    }
}

export default Wallet
