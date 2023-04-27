import { IBlock } from "../block.interface"
import { Proof } from "./workproof.interface"

class ProofOfStake implements Proof {
    execute(): IBlock {
        console.log("POS 실행")
        return {} as IBlock
    }
}

export default ProofOfStake
