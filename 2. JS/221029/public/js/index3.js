/*
데이터타입
    - 원시타입
        - 숫자 (number)
        - 문자열 (string)
        - 불리언 (boolean)
        - undefined : 선언후 암묵적으로 할당되는 값
        - null      : 의도적으로 값이 없다라는것을 명시할때 사용하는 값
        - Symbol    : ES6 타입

    - 객체타입
        - 배열
        - 객체
        - 함수
        ...
*/

// 하나의 변수에 여러 데이터를 넣고싶을경우.
// 배열 , 객체
let a = 10
let b = "hello"

// hello10
let c = [10, "hello"]

console.log(c[0]) // 10
console.log(c[1]) // hello

console.log(b + a) // hello10
console.log(c[1] + c[0])

console.log(c.length)

let d = [1, 2, 2, 3, 4, 4, 6]

console.log(d[2])
console.log(d[5])

console.log(d[1] + d[6])
console.log("==========")

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr 있는 변수를 하나씩 다 출력하세요.
// 0~7 까지 출력하는 반복문
for (let i = 0; i < arr.length; i++) {
    // 2 * {1} = {2}
    // 2 * {2} = {4}
    // 2 * {3} = {6}
    console.log("2 * " + arr[i] + " = " + 2 * arr[i])
}

// 어려운거.. 2중 for
console.log("===========")
for (let i = 1; i < 5; i++) {
    console.log("menu" + i)
    for (let j = 1; j < 5; j++) {
        console.log("  submenu" + i + "-" + j)
    }
}

// 2*1 ~ 2*9
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]) // 2 ~ 9
    for (let j = 1; j < 10; j++) {
        console.log(arr2[i] + " * " + j + " = " + arr2[i] * j)
    }
    // console.log("2 * " + arr2[i] + " = " + 2 * arr2[i])
}

// menu1
//  submenu1-1
//  submenu1-2
//  submenu1-3
//  submenu1-4
// menu2
//  submenu2-1
//  submenu2-2
//  submenu2-3
//  submenu2-4
// menu3
//  submenu3-1
//  submenu3-2
//  submenu3-3
//  submenu3-4
// menu4
//  submenu4-1
//  submenu4-2
//  submenu4-3
//  submenu4-4
