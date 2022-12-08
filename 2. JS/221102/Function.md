# 함수 표현식

**함수선언식**

```javascript
function showMessage() {}
```

**함수표현식**

```javascript
const showMessage = function () {}
```

> 호이스팅이 일어나지 않습니다.
> 대입연산자 함수도 무엇가의 값이다.

**즉시함수**

```js
function (){

}
```

**함수도 값이다**

```js
// 함수 선언식
function showMesage() {
    console.log("hello world!")
}

// 함수를 호출하지않고 함수이름만
// console.log 했을때 나오는값이.
console.log(showMesage)

// 새로운 변수를만들고 거기에다가 함수이름
// 넣었을때 되나 ??..
const fn = showMesage
let fn2 = showMesage
fn() // 된다...

// 그러면 한번에 변수선언하고 대입연산자
// 이후에 함수를 넣으면 되겟네 ?
const showMessage2 = function () {}
```

그렇다면 응용
매개변수에도 함수를 넣을수가 있나?
**yes**

**Callback 함수 예시**

```js
function hello(fn) {
    console.log(fn())
}

function print() {
    return 10
}

hello(print)
```

이런 형태를 `콜백함수` 라고 말하고
매개변수의 값은 함수 자체의 값이고
`hello` 함수 호출시 **인자값** 으로 함수값을 전달합니다.

`hello` 함수내부에서 `print` 함수를 호출함.
_이내용을 이해할려면 함수도 값이다 라는사실을 꼭 알아야함._

콜백함수 안에서 인자값 도 넣을수있다..
`print` 함수에 매개변수를 설정하면
`hello` 함수 내부에 선언된 변수를 활용하여 인자값을 넣을
수 있습니다.

```js
function hello(fn) {
    let ingoo = "javascript"
    console.log(fn(ingoo))
}

function print(name) {
    return 10 + name
}

hello(print)
```

함수 선언식과 함수 표현식의 차이점
함수표현식의 장점은 `호이스팅` 해결
함수표현식의 단점은 가독성 이슈

사실 정답은없어요
우리의 입장은 둘다알아야 하기떄문에..
nodejs 들어가기전까지는 함수선언식 사용할 예정

**문제**

```js
function ingoo(callback) {
    return callback
}

function goak(callback) {
    const fn = function () {
        return 30
    }
    const result = 1 + callback(fn)
    return result
}

function getNumber(callback) {
    return 2 * callback()
}

console.log(goak(getNumber))
```

# 화살표함수

함수 표현식을 조금더 간결한 문법으로 만드는 방법
ES6 에서 추가된 문법으로 `화살표 함수 (Arrow Function)`
이라고 합니다.

## 문법

```js
// 함수표현식
const sum = function (a+b) {
    return a+b
}

// 화살표 함수 : 함수표현식
const sum = (a+b) => {
    return a+b
}
```

화살표 함수는 생략이 가능하거든요

```js
// return 생략
const sum = (a+b) => {
    return a+b
}

const sum = (a+b) => a+b

//매개변수가 1개일경우 ( ) 생략됩니다.

const sum = (a) => {
    return a+1
}

const sum = (a) => a + 1
const sum = a => a + 1

```

사실 인자값이 하나일경우 `( )` 빼는걸 좋아합니다.
저도 어쩔수없이 넣습니다.

```javascript
const sum = function (a, b) {
    return a + b
}

const sum = (a, b) => a + b
```
