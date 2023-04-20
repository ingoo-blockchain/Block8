function add(x: number, y: number): number {
    return x + y
}
const add2 = function (x: number, y: number): number {
    return x + y
}

const add3 = (x: number, y: number) => x + y

const hello = (name: string = ""): void => {
    if (name) {
        console.log(name.length)
        console.log(`hello ${name}`)
    } else {
        console.log(`hello`)
    }
}

// 123 -> 321
// 'abc' -> 'cba'

// const reverse = (changed:number|string):string=>{
//     return changed.toString().split("").reverse().join("")
// }

// console.log(reverse("123"))

// 함수 오버로드
const reverse = (x: string | number): string | number => {
    const res = x.toString().split("").reverse().join("")
    return typeof x === "number" ? parseInt(res) : res
}

// function reverse(x: number): number
// function reverse(x: string): string
// function reverse(x: string | number): string | number {
//     const res = x.toString().split("").reverse().join("")
//     return typeof x === "number" ? parseInt(res) : res
// }

console.log(
    reverse(123), // 321
    reverse("abc")
) // 'cba'

const result = reverse("abc")
