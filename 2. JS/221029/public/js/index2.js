/**
 * input
 * prompt 값을 2가지를 받을겁니다.
 * 10 숫자와 20 숫자를 받을겁니다.
 */
// let input1 = prompt("첫번째 숫자를 입력해주세요.")
// let input2 = prompt("두번째 숫자를 입력해주세요.")

// console.log(input1) // 10
// console.log(input2) // 20

// 형변환
// console.log(Number(input1) + Number(input2)) // 1020
// console.log(parseInt(input1) + parseInt(input2))

// 조건문 if
// if 예약어

//
// 들여쓰기
// if (조건) {
//     // 여기를 실행하기! (true)
// } else {
//     // 여기를 실행하기! (false)
// }

// 지역변수
// codeblock 안에서 선언된 변수
// 중괄호 안에 선언된 변수는 중괄호안에서만 사용가능.

// 전역변수
// codeblock 밖에서 선언된 변수

// // 재선언??
// let a
// {
//     a = 0
// }

// console.log(a)

/**
 *                     string
 *  1. 각각 숫자를 받는 Input 만듭니다.
 *  2. 입력받은 값을 각각 a, b 라는 변수에 담습니다.
 *  3. a > b 클때는 "A가 큽니다." 출력
 *  4. a < b 작을떄 "B가 큽니다." 출력
 */

/**
 * 문제
 * 같을때는..?
 */

let a = prompt("첫번째 숫자를 입력해주세요.")
let b = prompt("두번째 숫자를 입력해주세요.")

a = parseInt(a) // 20
b = parseInt(b) // 20

if (a > b) {
    console.log("A가 큽니다.")
} else {
    if (a < b) {
        console.log("B가 큽니다.")
    } else {
        console.log("A와 B가 같습니다.")
    }
}

// String 조작
// A는 20 B는 10 으로 A가 큽니다.
// A는 10 B는 20 으로 B가 큽니다.
// A는 20 B는 20 으로 둘이 같습니다.
if (a > b) {
    console.log("A는 " + a + " B는 " + b + "으로 A가 큽니다.")
} else if (a < b) {
    console.log("B가 큽니다.")
} else {
    console.log("A와 B가 같습니다.")
}
