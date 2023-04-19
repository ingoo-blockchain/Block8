// interface는 객체의 구조를 정의하는 `타입`
// interface IProduct {
//     readonly name: string
//     price?: number
// }

interface IBoard {
    id: number
    title: string
    content: string
    readonly writer: string
    date: number
    hit: number
    like?: number
}

const board: IBoard = {
    id: 0,
    title: "",
    content: "",
    writer: "",
    date: 0,
    hit: 0,
}

console.log(board)

board.id = 10
board.title = "hello interface"

console.log(board)

// 추상
// inteface
// class

// class Product implements IProduct {
//     readonly name: string
//     price?: number

//     constructor(name: string, price: number) {
//         this.name = name
//     }
// }

// const product: IProduct = { name: "맥북", price: 1000 }
// const product2: IProduct = { name: "아수스", price: 700 }

// const product3 = new Product("맥북", 1000)
// const product4 = new Product("아수스", 700)
