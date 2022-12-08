# 함수

> 중복코드를 피하기 위함
> 편리한건 공부를 많이해서 익숙해지는 단계

```javascript
console.log("5 * " + i + " = " + 5 * i)
```

## 함수 선언

```javascript
function showMessage() {}
```

## 코드실행

브라우저 코드를 읽고,
브라우저 실행

## 힙과 콜스택

예약어에 따라 힙에 저장됨!

## 함수 선언과 호출

```javascript
// 함수선언
function showMessage() {
    console.log("hello showMessage!")
}

console.log("hello world!")

// 함수호출
showMessage()
```

## 함수 문법

```javascript
let text = "javascript"
function showMessage() {
    console.log("hello world!" + text)
}

showMessage()
```

## 호이스팅

호이스팅이 발동되는것들은
마치 전역변수로 선언된것처럼 된다.

## 전역변수 지역변수 활용

```js
// 전역변수 지역변수
// 1~100까지 합구하기

let result = 0 // 6
for (let i = 1; i < 101; i++) {
    result = result + i
}
console.log(result)
```

## 매개변수(Parameter) 와 인자 (Argument)

매개변수는 함수안에서 선언하는 변수
인자는 함수호출시 넣는 값

## return

return 은 함수 안에서만 사용하는 예약어.

함수 내부에서 return 을 만나게되면
함수를 종료시킵니다.

```javascript
function showMessage() {
    return
}
```

-   함수사용이유
-   함수선언
    -   호이스팅
-   함수호출
-   매개변수 : 함수선언시 사용하는 변수
-   인자 : 매개변수에 들어갈 값을 지정
-   return : default 맨마지막에.
-   함수호출시 () 안쓰고 console.log 찍었을 경우..
-   콜스택
