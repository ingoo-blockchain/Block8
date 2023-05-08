import App from "@wallet/app"
import Wallet from "@core/wallet/wallet"
import DigitalSignature from "@core/wallet/digitalSignature"
import CryptoModule from "@core/crypto/crypto.module"

const crypto = new CryptoModule()
const digitalSignature = new DigitalSignature(crypto)
const accounts = new Wallet(digitalSignature)

const app = App(accounts)

app.listen(3000, () => {
    console.log(`wallet start`)
})
