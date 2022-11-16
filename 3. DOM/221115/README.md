# 댓글

# Counter

처음에는 0 나와야함 +버튼 만들어야됨 -버튼 만들어야됨

+누르면 1증가함 -누르면 1감소함

1. 화면그리기

2. 어떻게 짤지를 고민

3. 입력값이 무엇인지

**첫번쨰 방법**

```js
const display = document.querySelector("#counter")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")

let num = 0
display.innerHTML = num

incrementBtn.addEventListener("click", function () {
    // +버튼을 눌렀을때.
    display.innerHTML = ++num
})

decrementBtn.addEventListener("click", function () {
    // -버튼을 눌렀을때.
    display.innerHTML = --num
})
```

```js
const display = document.querySelector("#counter")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")

let num = 0
display.innerHTML = num

function handler(e) {
    display.innerHTML = e.target.id === "increment" ? ++num : --num
}
incrementBtn.addEventListener("click", handler)
decrementBtn.addEventListener("click", handler)
```
