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

export class TxIn {
    txOutId?: string
    txOutIndex!: number
    signature?: SignatureInput
}

export class TxOut {
    account!: string
    amount!: number
}

// 150

// 10 10 10 10 10 10 10

export class TransactionRow {
    txIns!: TxIn[]
    txOuts!: TxOut[]
    hash?: string // Transaction 에 대한 고유한 식별자
}

export class UnspentTxOut {
    txOutId!: string
    txOutIndex!: number
    account!: string
    amount!: number
}

export type TransactionData = string | TransactionRow[]

export type UnspentTxOutPool = UnspentTxOut[]
export type TransactionPool = TransactionRow[]
