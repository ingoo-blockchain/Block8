/*
1 에서 100까지 출력하세요
3의 배수일땐 Fizz
5의 배수일때 Buzz
3의 배수면서, 5의 배수 을 출력하세요. FizzBuzz

3 3,5 true false = fizz
5 3,5 false true = buzz
15 3,5 true true = fizzbuzz
16 3,5 false false = 16

*/

// 1~10 3배수만 hello
// n%3 === 0 , n%5 === 0

// input n의값 1~100
// 몇의 배수인지 3,5
// 출력내용
const multiples = (num, mul, print) => {
    // return num%mul === 0
    if (num % mul === 0) {
        return print
    } else {
        return false
    }
}

const qst = [
    [3, "fizz"], // false , fizz
    [5, "buzz"], // false , buzz
    [6, "world"], // false , buzz
    [7, "hello"], // false , hello
]

// [false, false, hello]

// 그림 데이터

// for (let i = 1; i < 101; i++) {
//     const arr = []
//     for (let k = 0; k < qst.length; k++) {
//         const rst = multiples(i, qst[k][0], qst[k][1])
//         arr.push(rst)
//     }

//     let tmp = []
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] !== false) {
//             tmp.push(arr[j])
//         }
//     }

//     if (tmp.length === 0) {
//         console.log(i)
//     } else {
//         console.log(tmp.join(""))
//     }
// }

for (let i = 1; i <= 100; i++) {
    const arr =
        qst
            .map((value) => multiples(i, value[0], value[1]))
            .filter((v) => v)
            .join("") || i

    console.log(arr)
}
