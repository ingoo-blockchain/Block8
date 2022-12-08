# form

```js
function submitHandler(e) {
    console.log(e)
    alert("!!!")
}

function init() {
    const form = document.querySelector("#loginForm")
    form.addEventListener("submit", submitHandler)
    // submit 이벤트는 form 엘리먼트에서만 이벤트등록가능.
}

document.addEventListener("DOMContentLoaded", init)
```

## submit 이벤트가없을경우

1. 브라우저에서 Submit 버튼을 누르면
2. 내용을 만들어서 (queryString) Action 값에있는 URL이동

## submit 이벤트가 있을경우

1. 브라우저에서 Submit 버튼을 누르면
2. submit 이벤트를 발동시킴. 이후 submitHandler 함수가 호출되고 호출이끝나면.
3. 내용을 만들어서 (queryString) Action 값에있는 URL로 이동합니다.

Action값에있는 URL 이동을 막고싶다면.
Handler 함수 안에서 이벤트객체를 받아서.
`e.preventDefault()`

```js
e.preventDefault()
```

> 내용을 만들어서 (queryString) Action 값에있는 URL로 이동합니다. - 작동안됨!

이후 내가 원하는 시점에서 Submit을 날리고싶다면

```js
e.target.submit()
```

1. 만약에 input가 비어있다면. submit 안날리고.
2. 비어있으면 input 색깔을 바꾸기!
3. input가 채워져있다면. submit 날리기!

#### 1. 만약에 input가 비어있다면. submit 안날리고.

input 내용이 비어있다라는것을 어떻게 알까요 ?

id=uid 인 input박스를 가져오기
value값도 가져오기

### js로 element 만들기

uid : web7722
upw : 1234

아이디 : web7722 패스워드 : 1234

**element 만들기**

```js
document.createElement(엘리먼트이름)
document.createElement("li") // li Element 만들어줍니다.
```

**element 넣기**

```html
<ul id="userList"></ul>
```

```js
const userList = document.querySelector("#userList")
const liElement = document.createElement("li")
liElement.innerHTML = "hello world!"
userList.append(liElement)
```

# CRUD

## ToDoList

## Comment

## Board

## Event

click
keyup
DOMContentLoaded

초점

```js
document
```

```js
window
```

```js
this
```

### DOM

DataType
Object - 참조데이터

Method
**Element**

-   document.getElementById()
-   document.getElementsClassName()
-   document.getElementsTagName()

**이거 너무 훌륭~**

-   document.querySelector()
-   document.querySelectorAll()

-   HTML onClick="alert('hello world!')" X
-   Element.onClick = function(){ }

    -   1개 Event 2개를 등록할수없다.
    -   삭제하기 편하다~

-   Element.addEvnetLisnter(이벤트, 콜백함수)
    -   복수의 이벤트를 넣을수있다.
    -   삭제하기 불편하다.
    -   코드형태가 넘나 어렵다 callback...

```js
Element.addEventLisnter(이벤트, callback)

function listener(event, callback) {
    const e = {
        name: "asdfsdf",
    }
    if (event === "click") {
        callback(e)
    }
}

listener("click", function () {})
```

Event Object...

```js
function handler(e) {
    console.log(e)
    e.target
    e.type
    e.preventDefault()
}
div.addEvnetListner("click", handler)
```

submit
click
mouseover
mouseout
keyup
keydown
keypress



Property
