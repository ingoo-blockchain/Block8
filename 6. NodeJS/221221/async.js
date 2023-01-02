// callback
// tab index...
// promise
// promise 객체만드는게 어렵고.
// 사용할때 조금 코드가 많다.
// async/await
//

// const 아반떼 = async () => {
//     return "아반떼 go"
// }

// console.log(아반떼()) // { <pending> }

// 아반떼().then((data) => {
//     console.log(data)
// })

const 아반떼 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 go")
        }, 3000)
    })
}

const 소나타 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("소나타 go")
        }, 2000)
    })
}

const 제네시스 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("제네시스 go")
        }, 1000)
    })
}

// 아반떼 요청 후 응답
// 아반떼 요청 후 응답
// 제네시스 요청 후 응답
// 소나타 요청 후 응답
// 아반떼 요청 후 응답
// 소나타 요청 후 응답

// 로그인
// 아이디 패스워드
//

const init = async () => {
    // 6초
    // const result1 = await 아반떼() // 3
    // const result2 = await 제네시스() // 1
    // const result3 = await 소나타() // 2
    // console.log(result1)
    // console.log(result2)
    // console.log(result3)
    // [promise{}, promise{}, promise{}]
    // console.time("x")
    // const [a, b, c] = await Promise.all([아반떼(), 소나타(), 제네시스()])
    // console.log(a, b, c)
    // console.timeEnd("x")
}
init()

let rst = "아무것도 없나~?"
const init2 = async () => {
    const result = await 아반떼()
    rst = result
}

init2()
console.log(rst)

// 브라우저 -> web Server
// web Server -> DB Server
