import { SignatureInput } from "elliptic"

export class Sender {
    publicKey?: string
    account!: string
}

export class Receipt {
    sender!: Sender
    received!: string
    amount!: number
    signature?: SignatureInput
}

export class TransactionRow {
    hash?: string
}
export type TransactionData = string | TransactionRow[]
