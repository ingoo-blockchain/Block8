import ProofOfStake from "@core/block/workproof/proofofstake"
import ProofOfWork from "@core/block/workproof/proofofwork"
import WorkProof from "@core/block/workproof/woorkproof"
import { Proof } from "@core/block/workproof/workproof.interface"

describe("WorkProof", () => {
    let workProof: WorkProof
    let proof: Proof

    describe("ProofOfWork", () => {
        beforeEach(() => {
            proof = new ProofOfWork()
            workProof = new WorkProof(proof)
        })
        it("console.log 찍히나?~", () => {
            workProof.run()
        })
    })

    describe("ProofOfStake", () => {
        beforeEach(() => {
            proof = new ProofOfStake()
            workProof = new WorkProof(proof)
        })
        it("console.log 찍히나~?", () => {
            workProof.run()
        })
    })
})
