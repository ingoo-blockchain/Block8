import { TransactionData } from "core/transaction/transaction.interface"
import { Difficulty, Hash, Height, Timestamp } from "types/block"

export class BlockInfo {
    public version!: string
    public height!: Height
    public timestamp!: Timestamp
    public previousHash!: Hash
    public nonce: number = 0
    public difficulty: Difficulty = 0
}

export class BlockData extends BlockInfo {
    public merkleRoot!: Hash
    public data!: TransactionData
}

export class IBlock extends BlockData {
    public hash!: Hash
}
