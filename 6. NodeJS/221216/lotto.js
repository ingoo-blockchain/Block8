// const ClassPattern = {
//     0: "a",
//     1: "b",
//     2: "c",
//     3: "d",
//     4: "e",
// }

// const getNumber = (start, end) => {
//     const random = Math.floor(Math.random() * (end - start) + start)
//     return end < start ? null : random
// }

// const randomLotto = (length, count) => {
//     const result = new Array(count).fill(null)
//     const lotto = new Array(length).fill(null).map((value, index) => index + 1)
//     return result
//         .map((v) => {
//             const lottoIndex = getNumber(1, lotto.length)
//             const [number] = lotto.splice(lottoIndex, 1)
//             return number
//         })
//         .sort((a, b) => a - b)
// }

// const between = (number) => Math.ceil(number / 10) - 1
// const getClassName = (arr) => arr.map((v) => ClassPattern[between(v)])
// const lottoArray = randomLotto(45, 6)

// // console.log(lottoArray)
// // console.log(getClassName(lottoArray))
