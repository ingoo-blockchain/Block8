import { Hash } from "types/block"
import cryptojs from "crypto-js"
import merkle from "merkle"
import { TransactionData, TransactionRow } from "@core/transaction/transaction.interface"
import { BlockData, BlockInfo, IBlock } from "@core/block/block.interface"

// npm install crypto-js
class CryptoModule {
    // SHA256

    createBlockHash(data: BlockData) {
        // BlockInfo -> hash X
        // IBlock -> hash O

        const { version, height, timestamp, merkleRoot, previousHash, difficulty, nonce } = data
        const value = `${version}${height}${timestamp}${merkleRoot}${previousHash}${difficulty}${nonce}`
        return this.SHA256(value)
    }

    SHA256(data: string): Hash {
        const hash = cryptojs.SHA256(data).toString()
        return hash
    }

    hashToBinary(hash: Hash): string {
        let binary = ""
        for (let i = 0; i < hash.length; i += 2) {
            const hexByte = hash.substr(i, 2)
            const decimal = parseInt(hexByte, 16)
            const binaryByte = decimal.toString(2).padStart(8, "0")
            binary += binaryByte
        }

        return binary
    }

    merkleRoot(data: TransactionData) {
        if (typeof data === "string") {
            return merkle("sha256").sync([data]).root()
        } else if (Array.isArray(data)) {
            const sync = data
                .filter((v: TransactionRow) => {
                    if (!v.hash) return false
                    else this.isValidHash(v.hash)
                    return true
                })
                .map((v) => v.hash) as string[]
            return merkle("sha256").sync(sync).root()
        }
    }

    isValidHash(hash: Hash): void {
        const hexRegExp = /^[0-9a-fA-F]{64}$/
        if (!hexRegExp.test(hash)) {
            throw new Error(`해시값이 옳바르지 않습니다 hash : ${hash}`)
        }
    }
}

export default CryptoModule
