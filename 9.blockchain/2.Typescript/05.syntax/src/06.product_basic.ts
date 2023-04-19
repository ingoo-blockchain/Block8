// 상품

// class 유지보수를 위해서 사용하는 경우가 많습니다.
// 현재 이코드는 절대 유지보수가 좋다고 할수가없어요.
// 확장성이 부족합니다 매우 부족해여
// 할인도 종류가존재해요.

interface IProduct {
    name: string
    price: number
}

class Product {
    private name: string
    private price: number
    private discountAmount: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
        this.discountAmount = 0
    }

    getProduct() {
        return { name: this.name, price: this.getPrice() }
    }

    getName(): string {
        return this.name
    }
    getPrice(): number {
        return this.price - this.discountAmount
    }

    setDiscountAmount(amount: number): void {
        this.discountAmount = amount
    }
}

const product = new Product("상품", 1000)
// console.log(product.getPrice())
// product.setDiscountAmount(200)
// console.log(product.getPrice())

// // 쿠폰 퍼센트 1+1

// console.log(product.getProduct())

product.setDiscountAmount(300)
