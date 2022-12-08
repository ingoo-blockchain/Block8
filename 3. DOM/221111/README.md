# 경일게임아카데미 visual , gnb

HTML , CSS
count 0
0 class="on"
1
2

**구현한 기능은**
버튼을 클릭했을때.
내가 클릭한 버튼의 번호 알수있는상태.

1번이 선택되어있고, 버튼 3번을 클릭하면.

1번을 class="", 3번을 class="on"

class="on" 달려있는 엘리먼트의 인덱스를 가져온다. = 0
내가 클릭한 버튼의 인덱스를 가져온다. = 2

imgs[0].className = ""
imgs[2].className = "on"

Element.getAttribute()

```html
<input type="text" />
```

```js
input.getAttribute("type") // "text"
```

## 실행순서

```js
let intervalId = 25
let count = 1 // 3초마다 1씩 증가
```

-   0 :
-   1 :
-   2 : class="on"

**event**

1. DOMContentLoaded... 1번
2. init() 함수호출

**init() 내부안에서**

1. Element 내용들 가져오기
2. 함수선언 하기

    - findIndex :
    - slide
        > count 변수에있는 인덱스를 `class="on"` 달아주고, 달린이전에 값을 `class=""` 로 만들어준다. count 1씩 증가 시킨다
    - btnHandler :
    - prevHandler :
    - nextHandler :

3. 이벤트 등록

    - Btns 에 있는 모든 엘리먼트를 `click` 이벤트를 줌.
    - prev, next 엘리먼트에게 `click` 이벤트를 줌

4. slide() 호출

5. setInterval() 실행 - 비동기 [이벤트루프]

    - setInterval 에 `return` 값을 intervalId 변수 에 대입한다.
    - Background 라는 공간에 3초마다 `slide` 를 실행시킵니다.

사용자 클릭을 해야지만 실행됩니다.

6. btnHandler ...

목적 : 내가 클릭한 버튼이 어떤 버튼인가. 알기위함.

**고차 함수**

```js
function fn(index) {
    return function (e) {
        console.log(index, e)
    }
}

Element.addEventListner("click", fn(1))
```

`addEventListner` 장점은 하나의 함수로 여러 엘리먼트에게 이벤트를 등록이 가능합니다.

속성으로 부여할시 이렇게 작성됩니다.

```js
btns[0].onClick = function () {
    //1
}

btns[1].onClick = function () {
    //2
}

btns[2].onClick = function () {
    //3
}
```

```js
function handler() {
    // 애가 몇번 버튼이냐..?
}

btns[0].onClick = handler
btns[1].onClick = handler
btns[2].onClick = handler
```

0 , 1, 2 를 전달하고싶다...

```js
function handler(i) {
    // 애가 몇번 버튼이냐..?
    return undefined
}

btns[0].onClick = handler(0) // undefined
btns[1].onClick = handler(1) // undefined
btns[2].onClick = handler(2) // undefined
```

그렇다면.. 함수를 실행해서 함수를 리턴한다면..?

```js
function handler(index) {
    // 애가 몇번 버튼이냐..?
    return function () {
        console.log(index) // 오 너 0번 버튼이구나!
    }
}

btns[0].onClick = handler(0) // function
btns[1].onClick = handler(1) // function
btns[2].onClick = handler(2) // function
```

내가 클릭한 버튼의 인덱스로 count값이 바뀌길 원해여.

```js
imgs[index].className = "on"
```

문제 발생..

기존에있던 `class="on"` 지워지지 않는 상황

첫번째 방법이
반복문을 통해서 문제를 해결했습니다.

```js
const arr = ["경일", "게임", "아카데미"]
const search = "게임"

// arr 배열안에서 게임뺴고 다 출력해주세요.

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== search) {
        console.log(arr[i])
    }
}
```

우리가 슬라이드할 엘리먼트들은 모두 배열에 담고있었고.
우리는 버튼의 인덱스번호도 알고있었어요

```js
function btnHandler(index) {
    // 애가 몇번 버튼이냐..?
    return function () {
        for (let i = 0; imgs.length; i++) {
            if (i === index) {
                imgs[i].clasName = "on"
            } else {
                imgs[i].className = "off"
            }
        }
    }
}
```

반복문을 통해서 처리는 했지만. 문제는 만약에 내가 40개를 돌려야되는 상황이라면.
너무 `비효율적.`

내가 class="on" 달려있는 index번호를 알수있다면.
참쉬울텐데...

**element.getAttribute()**

```html
<input type="text" />
```

```js
const input = document.querySelector("type") // result : text
```

이 매서드를 활용해서 `findIndex()` 라는 함수를 제작했습니다.

```js
const arr = ["경일", "게임", "아카데미"]
const search = "게임"

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        console.log(i)
    }
}
```

```js
function findIndex() {
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].getAttribute("class") === "on") return i
    }

    return -1
}
```

**btnHandler의 비효율적인 문제를 findIndex 함수 제작으로 해결**

```js
function btnHandler(index) {
    return function (e) {
        const current = findIndex()

        imgs[current].className = ""
        imgs[index].className = "on"
        count = index
    }
}
```

**btnHandler 의 count 변수 재할당**

3초마다

```js
let count = 2 // 3초마다 증가. 0~2
```

2.9

-   0 : class="on"
-   1 :
-   2 :
