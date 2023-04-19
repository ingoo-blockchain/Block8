// 할인!
interface Discount {
    getDisCountPrice(price: number): number
}

// 그냥 깍는거
class FlatDiscount implements Discount {
    private amount: number
    constructor(amount: number) {
        this.amount = amount
    }

    getDisCountPrice(price: number): number {
        return price - this.amount
    }
}

// 할인으로 깍는거
class PercentDiscount implements Discount {
    private amount: number
    constructor(amount: number) {
        this.amount = amount
    }

    getDisCountPrice(price: number): number {
        return price * (1 - this.amount / 100)
    }
}

class FlatPercentDiscount implements Discount {
    private flatAmount: number
    private percent: number

    constructor(flatAmount: number, percent: number) {
        this.flatAmount = flatAmount
        this.percent = percent
    }

    getDisCountPrice(price: number): number {
        const flatdiScountAmount = price - this.flatAmount
        return flatdiScountAmount * (1 - this.percent / 100)
    }
}

class Products {
    private name: string
    private price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }
}

class ProductDiscount {
    private product: Products
    private discount: Discount

    constructor(product: Products, discount: Discount) {
        this.product = product
        this.discount = discount
    }

    getPrice(): void {
        // console.log(this.product.getPrice(), this.discount)
        console.log(this.discount.getDisCountPrice(this.product.getPrice()))

        // 맥북 얼마니?!
        // 할인율얼마니 ? 10%
    }
}

const prod = new Products("맥북", 10000) // 3000 // {name,price}
const prod2 = new Products("아수스", 7000) // 10

const prodWithPercentDiscount = new PercentDiscount(10)
const prodWithFlatDiscount = new FlatDiscount(3000)
const prodWithFlatPercentDiscount = new FlatPercentDiscount(3000, 10)

const productWithDiscount = new ProductDiscount(prod, prodWithPercentDiscount)
productWithDiscount.getPrice() // 7000

const prod2uctWithDiscount = new ProductDiscount(prod2, prodWithFlatDiscount)
prod2uctWithDiscount.getPrice()

const product3WithDiscount = new ProductDiscount(prod, prodWithFlatPercentDiscount)
product3WithDiscount.getPrice() // 10000 - 3000  700
