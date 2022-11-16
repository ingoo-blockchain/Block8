/*
    연산자 
    + - * / %

    + 제외하고
    Number 
*/

/*
    단항 산술연산자 
    ++ -- 
*/

let num = 1
num++ // num = num + 1

console.log(num)

num--
console.log(num)

let num2 = 4

// // 값호출 후 후증가
// console.log(num2++)

// // 선증가후 후 값호출
// console.log(++num2)

console.log(--num2) // 3
console.log(num2++) // 3
console.log(num2--) // 4
console.log(++num2) // 4
console.log(num2) // 4

/*
 += 5
 -= 5
 /= 5
 %= 5

 num = num + 5 // num += 5
 num = num - 5 // num -= 5
 num = num / 5 // num /= 5
 num = num % 5 // num %= 5
*/

let num3 = 5
num3 += 3
console.log(num3) // 8

num3 -= 5
console.log(num3) // 3

// 비교연산자 ***
// 비교연산자를 사용하면 결과물을
// boolean 타입으로 반환된다.

// 데이터타입
// 1. number
// 2. string
// 3. boolean
/*
    1 , 0 = 1bit
    참 거짓
   true false 
*/

let num4 = 10
let num5 = 11

/**
 * 1+1 = 2
 * ==
 * 1 == 1
 *
 *  a == b 비교하지만 (값만)
 *  a === b a b 비교하고, 데이터타입까지 비교합니다.
 *  a != b   a b 비교하는데. 1 != 1  false
 *  a !== b
 */

console.log(1 === 1) // 1과 1은 같은가 ? 네 true
console.log(1 !== 1) // 1과 1은 다른가 ? 아니요 false

console.log(1 == true) // 1과 true는 같은가? 네 true
console.log(0 == false) // 0과 false는 같은가 네 true
console.log(1 != true) // 1과 true는 다른가? 아니오 false

// 대소관계

// > , < , >= , <=

// 1 > 2 false
// 1 < 2 true
// 1 >= 2 false
// 1 <= 2 true
// 2 >= 2 true
// 2 <= 2 true

console.log(1 > 2)
console.log(1 < 2)
console.log(1 >= 2)
console.log(1 <= 2)
console.log(2 >= 2)
console.log(2 <= 2)

// 조건문  if문
/*
    비교를 합니다. (ture , false)
    ture 일떄는 A라는것을 console.log
    flase 일때는 B라는것을 console.log

    기본 골격  
    + else

    () 안에있는 내용을 정확하게 이해하는것.
    boolean

    비교연산자와 많이 사용됩니다.
*/

// false
if (1 > 2) {
    // true 일때 실행됩니다.
    console.log("Hello World!")
} else {
    console.log("false")
}

// 반복문
// 3가지 값이 존재합니다.
// 1. 초기값 - 변수선언후 할당
// 2. 종료조건 boolean  비교연산자
// 3. 증감값

{
    /* <div style='background:red;color:blue'></div> */
}

// for(1.초기값; 2.종료조건; 3.증감값 )

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

for (let i = 1; i <= 10; i++) {
    console.log(i)
    console.log("hello world")
}

/**
 *  1~ 10 찍습니다.
 *
 */

/**
 *
 *
 */

/**
 * 1~10까지 찍는데요
 * 4의 배수에서
 * console.log('Hello world!')
 * 1
 * 2
 * 3
 * hello world
 * 5
 * 6
 * 7
 * hello world
 * 9
 * 10
 *
 */
// ========== \\\\\\\\
// || |
// 1234567890=\\\\\\\\|||||||\\\\||||\\\||||
console.log("==========================")
for (let i = 1; i <= 10; i++) {
    if (i % 4 === 0) {
        console.log("hello world!")
    } else {
        console.log(i)
    }
}

for (let i = 1; i <= 10; i++) {
    console.log("2 * " + i + " = " + i * 2)
}
