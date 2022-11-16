// Javascript 변수

/**
 * var - hosting
 * let
 * const
 */

var num = 1
/**
 * 재선언 X , 재할당 가능
 * 재선언하고나서 오류메시지 확인하기.
 */
let num2 = 2
num2 = 3
/**
 * 재선언 불가능, 재할당 불가능
 * 재선언 할떄 오류메시지와
 * 재할당했을때 오류메시지
 */
const num3 = 3

/**
 * 예약어
 * const const = 3
 * 에러메시지 확인하기
 */

/**
 * ''
 * ""
 * ``
 */
const str = "Hello Javascript"

console.log(1 + 1)
console.log(str + 1)

/**
 * 연산자
 * + - * / %  == === =
 *
 * ++ -- + -
 */
let num4 = 5

console.log(++num4)
console.log(++num4)
console.log(num4++)
console.log(num4++)
console.log(++num4)
console.log(num4)

/**
 * 비교연산자
 *  boolean
 * ==
 * ===
 * !=
 * !==
 * >
 * <
 * >=
 * <=
 */

// 논리연산자..
/**
 * 1~10까지 출력을하는데
 * 5의 배수만 hello world 찍어라!
 */
console.log("=============")
for (let i = 1; i <= 10; i++) {
    if (i === 5 || i === 10) {
        console.log("hello world!")
    } else {
        console.log(i)
    }
}

/**
 *  || OR  둘중 하나라도 참이면 참
 *  true || true  -> true
 *  true || false -> true
 *  false || true -> true
 *  false || false -> false
 *
 *  && AND 둘다 참이여야지 참
 *  true && true -> true
 *  true && false -> false
 *  false && true -> false
 *  false && false -> false
 *
 *  !true -> false
 *  !flase -> true
 */

let a = 1
let b = 2
let c = 1
let d = 1
console.log(a === b || c === d)

/**
 Input / Output 
 X 값을 입력을했을대.
 Y 값을 출력하겠다. 
 */
let input = prompt("내용을 입력해주삼!")
console.log(input)
