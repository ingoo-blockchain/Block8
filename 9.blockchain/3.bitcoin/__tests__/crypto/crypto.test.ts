import { GENESIS } from "@constants/block.constants"
import { BlockData, BlockInfo } from "@core/block/block.interface"
import CryptoModule from "@core/crypto/crypto.module"

describe("CryptoModule", () => {
    let cryptoModule: CryptoModule

    beforeEach(() => {
        cryptoModule = new CryptoModule()
    })

    describe("SHA256", () => {
        it("SHA256에 인자내용을 평문으로해서 암호화가 되는가", () => {
            const data = "hello!"
            // SAH256
            const result = cryptoModule.SHA256(data)
            expect(result.length).toBe(64)
        })
    })

    describe("createBlockHash", () => {
        it("createBlockHash에서 blockinfo 데이터로 암호화가 진행되는가?", () => {
            // blockinfo를 넣기전에
            const blockinfo: BlockData = {
                version: GENESIS.version,
                height: GENESIS.height,
                timestamp: GENESIS.timestamp,
                previousHash: GENESIS.previousHash,
                merkleRoot: GENESIS.merkleRoot,
                nonce: GENESIS.nonce,
                difficulty: GENESIS.difficulty,
                data: "",
            }

            // 객체 -> blockinfo -> data
            const hash = cryptoModule.createBlockHash(blockinfo)
            // 63f276c89f94976122ea51f5826d8d45e336e332bd5259f6deedbc2c01be62a8
            // 84ffab55c48e36cc480e2fd4c4bb0dc5ee1bb2d41a4f2a78a1533a8bb7df8370
            expect(hash).toHaveLength(64)
        })
    })

    describe("HashtoBianry", () => {
        it("이진데이터로 잘 변경되는가?", () => {
            const data = "hash"
            const hash = cryptoModule.SHA256(data)
            const binary = cryptoModule.hashToBinary(hash)
            expect(binary.length).toBe(256)
        })
    })

    describe("merkleroot", () => {
        it("genesis 블럭에 있는 data값에서 merkleroot 구하기", () => {
            const merkleroot = cryptoModule.merkleRoot(GENESIS.data)
            expect(merkleroot).toHaveLength(64)
        })

        it("data값이 TransactionRow[] 형태일경우 잘 생성되는가?", () => {
            const data = [{ hash: "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3DF" }, { hash: "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3DF" }]
            const merkleroot = cryptoModule.merkleRoot(data)
            expect(merkleroot).toHaveLength(64)
        })

        it("data값이 옳바르지 않을경우 에러가 발생하는가 ?", () => {
            const data = [{ hash: "DC24B19FB7508611ACD8AD17F401753670CFD8DDC875125E98D82E3DF" }, { hash: "DC24B19FB7508611ACD670CFD8DD1BEBEF9C875125E98D82E3DF" }]
            expect(() => {
                cryptoModule.merkleRoot(data)
            }).toThrowError()
        })
    })

    describe("isValidHash", () => {
        it("hash length 64미만일경우", () => {
            const hash = "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3D"
            expect(() => {
                cryptoModule.isValidHash(hash)
            }).toThrowError(`해시값이 옳바르지 않습니다 hash : ${hash}`)
        })

        it("hash 값 옳바르지 않을경우", () => {
            const hash = "DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3DG"
            expect(() => {
                cryptoModule.isValidHash(hash)
            }).toThrowError()
        })
    })
})
