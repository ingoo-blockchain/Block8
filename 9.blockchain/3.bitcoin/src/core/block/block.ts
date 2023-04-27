import { VERSION } from "@constants/block.constants"
import { BlockData, BlockInfo, IBlock } from "./block.interface"
import CryptoModule from "@core/crypto/crypto.module"
import { TransactionData, TransactionRow } from "@core/transaction/transaction.interface"
import WorkProof from "./workproof/woorkproof"

class Block {
    constructor(private readonly crypto: CryptoModule, private readonly workProof: WorkProof) {}

    createBlock(previousBlock: IBlock, data: TransactionData, adjustmentBlock: IBlock) {
        const blockData = this.createBlockData(previousBlock, data)
        const newBlock = this.workProof.run(blockData, adjustmentBlock)
        return newBlock
    }

    isValidBlock(block: IBlock) {
        this.crypto.isValidHash(block.hash)
        const validHash = this.crypto.createBlockHash(block)
        if (validHash !== block.hash) throw new Error(`블럭 해시값이 옳바르지 않습니다 hash : ${validHash},${block.hash}`)
    }

    createBlockData(previousBlock: IBlock, data: TransactionData): BlockData {
        const blockinfo = this.createBlockInfo(previousBlock)

        return {
            ...blockinfo,
            merkleRoot: this.crypto.merkleRoot(data),
            data,
        } as BlockData
    }

    createBlockInfo(previousBlock: IBlock): BlockInfo {
        this.isValidBlock(previousBlock)

        const blockInfo = new BlockInfo()

        blockInfo.version = VERSION
        blockInfo.height = previousBlock.height + 1
        blockInfo.timestamp = new Date().getTime()
        blockInfo.previousHash = previousBlock.hash
        return blockInfo
    }
}

export default Block
