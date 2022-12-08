# Event

브라우저

`click`
`mouseover` `mouseout`

특정함수를 호출

```js
function a() {
    console.log("hello world")
}
```

**문법**

on[Event 이름]

onClick
onMouseout
onMouseover

## 1. Element에 직접넣기.

```html
<button onClick="console.log('hello world')">버튼</button>
```

## 2. DOM 속성으로 넣는방법이있습니다.

1. JS 해당 Element 선택할줄알아야함.
2. 선택한 Element에 onclick 속성에 함수선언을 대입함.

```js
const btn = document.querySelector(".btn")
console.log(btn)

btn.onclick = function () {
    console.log("hello world!")
    alert("hello world!")
}

const btn2 = document.querySelector(".btn")
console.log(btn2)
```

## 3. addEventListner

속성에다가 함수값을 넣어버리면.
함수를 하나밖에 못넣지않음?

해당 엘리먼트에다가 복수 이벤트를 넣을수있게 해줌.

### 3.1 이벤트 등록

**문법**

```js
// event
// on click
//    mouseover
//    mouseout
element.addEventListener("event", 함수값)
```

```js
const btn = document.querySelector(".btn")

const btnHandler = function () {
    console.log("hello world!")
}
btn.addEventListener("click", btnHandler)
btn.addEventListener("click", function () {
    console.log("hello world2!")
})

function listener(event, callback) {
    if (event === "click") {
        callback()
    }
}

function handler() {
    console.log("hello world!")
}

listener("click", handler)

// listener("click", function () {
//     console.log("hello world!")
// })
```

### 3.2 이벤트 삭제

**문법**

```js
const btn = document.querySelector('.btn')

btn.removeEventListner()

let a = 'hello wrold'
Element.removeEventListner(이벤트명:string, 함수값:function)
```

### 3.3 이벤트 객체

```js
function listner(event, callback) {
    let obj = {
        name: "ingoo",
    }
    if (event === "click") {
        callback(obj)
    }
}

function handler3(e) {
    console.log(e)
    console.log("hello world!")
}

listner("click", handler3)
```
