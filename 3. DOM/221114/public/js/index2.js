let lotto = []
let lottoArr = []
for (let i = 0; i < 45; i++) {
    lottoArr.push(i + 1)
}

// let index = Math.floor(Math.random() * lottoArr.length) // 0~44

// lotto.push(lottoArr[index])
// lottoArr.splice(index, 1) // 0~43

// index = Math.floor(Math.random() * lottoArr.length) // 0~43

// lotto.push(lottoArr[index])
// lottoArr.splice(index, 1)

// console.log(lottoArr)
// console.log(lotto)

for (let i = 0; i < 7; i++) {
    let index = Math.floor(Math.random() * lottoArr.length)
    lotto.push(lottoArr[index])
    lottoArr.splice(index, 1)
}

console.log(lottoArr)
console.log(lotto)

// [19, 15, 26, 36, 14, 44, 7]
// javascritp 배열 정렬
// Array.prototype.sort()

// javascript 정렬알고리즘
// 버블정렬 - !
// 삽입정렬

const sortArr = [5, 3, 1, 6, 8, 7, 2, 4]

// 저희가 반복해야할건 7
console.log(sortArr)
for (let i = 0; i < sortArr.length - 1; i++) {
    let temp
    for (let j = 0; j < sortArr.length - 1 - i; j++) {
        if (sortArr[j] > sortArr[j + 1]) {
            temp = sortArr[j]
            sortArr[j] = sortArr[j + 1] // [3, 3, 1, 6, 8, 7, 2, 4]
            sortArr[j + 1] = temp
        }
    }
    console.log(i, sortArr)
}

console.log(sortArr)
