import { DIFFICULTY_ADJUSTMENT_INTERVAL, GENESIS } from "@constants/block.constants"
import { IBlock } from "@core/block/block.interface"

class Chain {
    private readonly INTERVAL: number = DIFFICULTY_ADJUSTMENT_INTERVAL
    private readonly chain: IBlock[] = [GENESIS]

    constructor() {}

    public get() {
        return this.chain
    }

    public length() {
        return this.chain.length
    }

    public latestBlock() {
        return this.chain[this.length() - 1]
    }

    public addToChain(receivedBlock: IBlock) {
        this.chain.push(receivedBlock)
        return this.latestBlock()
    }

    public isValid() {}
    public replaceChain() {}

    public getBlock(callbackFn: (block: IBlock) => boolean) {
        const findBlock = this.chain.find(callbackFn)
        if (!findBlock) throw new Error("블럭을 찾을수 없습니다~")
        return findBlock
    }

    public getBlockByHash(hash: string) {
        return this.getBlock((block: IBlock) => block.hash === hash)
    }

    public getBlockByHeight(height: number): IBlock {
        return this.getBlock((block: IBlock) => block.height === height)
    }

    public getAdjustmentBlock() {
        const { height } = this.latestBlock()

        const findHeight = height < this.INTERVAL ? 1 : Math.floor(height / this.INTERVAL) * this.INTERVAL
        return this.getBlockByHeight(findHeight)
    }

    public serialize() {
        return JSON.stringify(this.chain)
    }

    public deserialize(chunk: string) {
        return JSON.parse(chunk)
    }
}

const chain = new Chain()

export default Chain
