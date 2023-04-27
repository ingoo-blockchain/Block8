import { GENESIS } from "@constants/block.constants"

describe("제네시스 블럭", () => {
    it("제네시스블럭 형태가 옳바른가 ?", () => {
        expect(GENESIS.version).toBe("1.0.0")
        expect(GENESIS.height).toBe(1)
        expect(GENESIS.timestamp).toBe(1231006506)
        expect(GENESIS.difficulty).toBe(0)
        expect(GENESIS.nonce).toBe(0)
        expect(GENESIS.hash).toBe("84ffab55c48e36cc480e2fd4c4bb0dc5ee1bb2d41a4f2a78a1533a8bb7df8370")
        expect(GENESIS.merkleRoot).toBe("DC24B19FB7508611ACD8AD17F401753670CFD8DD1BEBEF9C875125E98D82E3D8")
        expect(GENESIS.previousHash).toBe("0".repeat(64))
        expect(GENESIS.data).toBe("2009년 1월 3일 더 타임스, 은행들의 두번째 구제금융을 앞두고 있는 U.K 재무장관")
    })
})
