// 1 -> 1
// 'asdf' -> 'asdf'
// {} -> {}
// [] -> []

interface Props {
    name: string
    id: string
}

const echo = <T>(a: T): T => {
    console.log(a)
    return a
}

// echo(10)
// echo("asdf")
// echo({ name: "test" })
// echo(["123"])

const props = {
    name: "ingoo",
    id: "web7722",
}

echo<Props>(props)

// 1 -> [1] , 'asdf' -> ['asdf']
// 1 -> [1,2] , 'asdf' -> ['asdf', 'asdfasdf']

// const push = <T>(a: T): T[] => {
//     if (typeof a === "string") {
//         return [a, a]
//     } else if (typeof a === "number") {
//         return [a, num]
//     }

//     const result = [a]
//     return result
// }

// push(1)
// push("asdf")

// const reverse2 = <T>(x: T): T => {
//     const res = x.toString().split("").reverse().join("")
//     return typeof x === "number" ? parseInt(res) : res
// }

// console.log(
//     reverse2(123), // 321
//     reverse2("abc")
// ) // 'cba'

// x: { asdf: "asdf" }
// T : Object
const reverse3 = <T>(x: T): T => {
    const params = typeof x === "number" ? x.toString() : x
    const result = typeof params === "string" ? params.split("").reverse().join("") : params
    return result as T
}

// console.log(reverse3(123), reverse3("asdfb"), reverse3({ asdf: "asdf" }))

// reverse3("asdf")

// x: { asdf: "asdf" }
// T : Object
const reverse2 = <T>(x: T): T => {
    if (typeof x === "string" || typeof x === "number") {
        return x.toString().split("").reverse().join("") as T
    }

    if (x instanceof Array) {
        return x.reverse() as T
    }

    if (typeof x === "object" && x !== null) {
        return Object.fromEntries(Object.entries(x).reverse()) as T
    }

    return null as T
}

console.log("bitkunst", reverse2(123), reverse2("asdfb"), reverse2({ asdf: "asdf", aa: "asdf" }), reverse2([1, 2, 3]), reverse2(null))

interface A {
    name: string
}

interface B {
    age: number
}

interface C {
    weight: number
}
const a: A = { name: "asdf" }
const b: B = { age: 30 }
const c: C = { weight: 100 }

const objectToArray = (value: object): object => {
    return value
}

objectToArray(b)
