import CryptoModule from "@core/crypto/crypto.module"
import { IBlock } from "../block.interface"
import { DifficultyProps, Proof, ProofOfWorkProps } from "./workproof.interface"
import { BLOCK_GENERATION_INTERVAL, DIFFICULTY_ADJUSTMENT_INTERVAL } from "@constants/block.constants"

class ProofOfWork implements Proof {
    constructor(private readonly crypto: CryptoModule) {}
    execute(props: ProofOfWorkProps): IBlock {
        const { blockData, adjustmentBlock } = props
        let block: IBlock = { ...blockData, hash: "" }

        do {
            block.nonce += 1
            block.timestamp = new Date().getTime()
            const difficultyProps = this.getDifficultyProps(block, adjustmentBlock)
            block.difficulty = this.getDifficulty(difficultyProps) // method
            block.hash = this.crypto.createBlockHash(block)
        } while (!this.crypto.hashToBinary(block.hash).startsWith("0".repeat(block.difficulty)))

        return block as IBlock
    }

    getDifficultyProps(block: IBlock, adjustmentBlock: IBlock): DifficultyProps {
        const { height, timestamp: currentTime } = block
        const { difficulty, timestamp: adjTime } = adjustmentBlock
        return {
            height,
            currentTime,
            adjTime,
            difficulty,
        }
    }

    getDifficulty(props: DifficultyProps): number {
        const { height, currentTime, adjTime, difficulty } = props

        if (height <= 0) throw new Error("높이가 0이 들어왔습니다.")
        if (height < 10) return 0
        if (height < 20) return 1

        if (height % DIFFICULTY_ADJUSTMENT_INTERVAL !== 0) return difficulty

        const timeTaken = currentTime - adjTime // 총 걸린 시간 (timestamp) 1000~12000
        const timeExpected = BLOCK_GENERATION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL // 6000 / 2 => 3000
        // 6000 * 2 = 12000

        if (timeTaken < timeExpected / 2) return difficulty + 1
        if (timeTaken > timeExpected * 2) return difficulty - 1
        return difficulty
    }
}

export default ProofOfWork
