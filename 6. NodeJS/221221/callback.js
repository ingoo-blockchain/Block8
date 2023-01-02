/* callback hell */

// const 아반떼 = (callback) => {
//     setTimeout(() => {
//         console.log("아반떼 go")
//         callback()
//     }, 3000)
// }

// const 소나타 = (callback) => {
//     setTimeout(() => {
//         console.log("소나타 go")
//         callback()
//     }, 2000)
// }

// const 제네시스 = (callback) => {
//     setTimeout(() => {
//         console.log("제네시스 go")
//         callback()
//     }, 1000)
// }

// 아반떼 요청 후 응답
// 아반떼 요청 후 응답
// 제네시스 요청 후 응답
// 소나타 요청 후 응답
// 아반떼 요청 후 응답
// 소나타 요청 후 응답
let a = 10
아반떼(() => {
    아반떼(() => {
        제네시스(() => {
            소나타(() => {
                아반떼(() => {
                    소나타(() => {
                        console.log("end")
                        a = 20
                    })
                })
            })
        })
    })
})
console.log(a)

// 클라이언트 입장에서 서버에서 요청을 몇개하나요 ?
// 3개의 요청
// 3개의 응답

// 아반떼 요청후 응답이 오면 3
// 소나타를 요청후 응답 2
// 제네시스 요청하고 응답. 1

// promise
// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("OK")
//     }, 3000)
// })

// console.log(pr) // Promise { state: <pending>, result: undefined }
// Promise { state: <fulfilled>, result: 'OK' }
// Promise { state: <rejected>, result: 'OK' }

// Promise { <pending> }
// state
// - pending
// - fulfilled
// - rejected

// promise 객체는 then, catch, finally

// Promise { state: <pending>, result: undefined }
// Promise { state: <fulfilled>, result: 'OK' }
// Promise { state: <rejected>, result: 'OK' }

// 이행, 리젝 X 상태가 fulfilled 실행해주겠다.
// pr.then((data) => {
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

// 프로미스 체이닝
// console.time("x")
// 아반떼()
//     .then((data) => {
//         console.log(data)
//         return 소나타() //
//     })
//     .then((data) => {
//         console.log(data)
//         return 제네시스()
//     })
//     .then((data) => {
//         console.log(data)
//         console.timeEnd("x")
//     })

// 아반떼 요청 후 응답
// 아반떼 요청 후 응답
// 제네시스 요청 후 응답
// 소나타 요청 후 응답
// 아반떼 요청 후 응답
// 소나타 요청 후 응답

아반떼()
    .then((data) => {
        console.log(data)
        // 로직
        return 아반떼()
    })
    .then((data) => {
        console.log(data)
        // 로직
        return 제네시스()
    })
    .then((data) => {
        console.log(data)
        // 로직
        return 소나타()
    })
    .then((data) => {
        console.log(data)
        return 아반떼()
    })
    .then((data) => {
        console.log(data)
        return 소나타()
    })
    .then((data) => {
        console.log(data)
    })
