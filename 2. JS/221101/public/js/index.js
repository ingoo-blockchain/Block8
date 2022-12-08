// 재귀함수

console.time()
let result = 0
for (let i = 0; i < 101; i++) {
    result += i
}
console.log(result)
console.timeEnd()

// 100 1~100
console.time()
let n = 100
console.log((n / 2) * (n + 1))
console.timeEnd()

// 재귀함수
// 피보나치 수열 < -- 검색하세요..

// console.time()
function sum(n) {
    if (n <= 98) {
        return 1
    }
    return n + sum(n - 1)
}
console.log(sum(100))
// 100 + 99 + 1
// console.timeEnd()

sum(98)

function a() {
    console.log("hello world!")
}

console.log(a)
