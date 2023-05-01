import CryptoModule from "@core/crypto/crypto.module"
import DigitalSignature from "@core/transaction/digitalSignature"
import { Receipt } from "@core/transaction/transaction.interface"

describe("디지털 서명 이해하기", () => {
    let digitalSignature: DigitalSignature

    beforeEach(() => {
        const crypto = new CryptoModule()
        digitalSignature = new DigitalSignature(crypto)
    })

    describe("createPrivateKey", () => {
        it("개인키 생성하기", () => {
            const privateKey = digitalSignature.createPrivateKey()
            expect(privateKey).toHaveLength(64)
        })
    })

    describe("createPublicKey", () => {
        it("공개키 생성하기", () => {
            const privateKey = digitalSignature.createPrivateKey()
            const publicKey = digitalSignature.createPublicKey(privateKey)

            console.log("publicKey : ", publicKey)
            console.log("publicKey2: ", digitalSignature.createPublicKey(privateKey))
            expect(publicKey).toHaveLength(66) // 64 x 66 앞에 1byte 붙습니다 02 or 03
        })
    })

    describe("createAccount", () => {
        it("계정 생성하기", () => {
            const privateKey = digitalSignature.createPrivateKey()
            const publicKey = digitalSignature.createPublicKey(privateKey)
            const account = digitalSignature.createAccount(publicKey)

            expect(account).toHaveLength(40)
        })
    })

    describe("서명", () => {
        let sender_privateKey: string
        let sender_publicKey: string
        let sender_account: string

        let received_privateKey: string
        let received_publicKey: string
        let received_account: string

        let receipt: Receipt

        beforeEach(() => {
            sender_privateKey = digitalSignature.createPrivateKey()
            sender_publicKey = digitalSignature.createPublicKey(sender_privateKey)
            sender_account = digitalSignature.createAccount(sender_publicKey)

            received_privateKey = digitalSignature.createPrivateKey()
            received_publicKey = digitalSignature.createPublicKey(received_privateKey)
            received_account = digitalSignature.createAccount(received_publicKey)

            receipt = {
                sender: {
                    account: sender_account,
                    publicKey: sender_publicKey,
                },
                received: received_account,
                amount: 30,
            }
        })

        it("sign만들기", () => {
            const signature = digitalSignature.sign(sender_privateKey, receipt)
            console.log(signature)
            // 30440220276edda683d6d1556d6ffbaede64280035725fdc8e5c65391f53ec4d5a754f1f02204210caa74549c0cb1544f6237bc6abe688a95f16947580cd8fe2de13079dd945
            // 30440220 DER
            // 0x30 DER 형
            // 0x44 전체 바이트를
            // 0x02 R값 을 시작하는 바이트
            // 0x20 R값 의 길이를 나타내는 바이트
            // R : 276edda683d6d1556d6ffbaede64280035725fdc8e5c6
            // 276edda683d6d1556d6ffbaede64280035725fdc8e5c65391f53ec4d5a754f1f02204210caa74549c0cb1544f6237bc6abe688a95f16947580cd8fe2de13079dd945

            expect(typeof signature).toBe("object")
            expect(typeof signature.signature).not.toBe(undefined)
        })

        it("검증", () => {
            const receipt2 = digitalSignature.sign(sender_privateKey, receipt)

            receipt2.amount = 50

            const bool = digitalSignature.verify(receipt2)
            console.log(bool)
        })
    })
})
