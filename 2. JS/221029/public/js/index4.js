// 연습

console.time()
let num = 0
for (let i = 0; i < 101; i++) {
    num += i
}
console.log(num)
console.timeEnd()

console.time()
// 수학공식
let n = 100
console.log(n * ((n + 1) / 2))
console.timeEnd()

// 재귀함수
console.time()
function ingoo(n) {
    if (n <= 1) {
        return 1
    }
    return n + ingoo(n - 1) // 재귀함수
}
console.log(ingoo(100))
console.timeEnd()
