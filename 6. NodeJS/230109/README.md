# MVC 패턴 Back-end

1. 강찬수 (선택)
2. 이민수 (선택)

# Front-end

`Javascript` 문법이 잘되어야있어야지만 가능해요.
흐름

월요일 1단계

수,목 2단계

월요일 3단계

# Back-end

흐름

## Front

```sh
npm init -y
npm install express nunjucks


```

```js
const list = request.find()
const list = [
    { id: 1, userid: "123", content: "asdf" },
    { id: 1, userid: "123", content: "asdf" },
    { id: 1, userid: "123", content: "asdf" },
]

<ul class="comment-row" data-index="1">
    <li class="comment-id"></li>
    <li class="comment-content"></li>
    <li class="comment-date"></li>
</ul>

const list = [
    `<ul class="comment-row" data-index="${id}">
        <li class="comment-id">${userid}</li>
        <li class="comment-content">${content}</li>
        <li class="comment-date">${date}</li>
    </ul>`,
    `<ul class="comment-row" data-index="1">
        <li class="comment-id"></li>
        <li class="comment-content"></li>
        <li class="comment-date"></li>
    </ul>`,
    `<ul class="comment-row" data-index="1">
        <li class="comment-id"></li>
        <li class="comment-content"></li>
        <li class="comment-date"></li>
    </ul>`,
]
```

## 추상화

함수를 만듬.

```js
const setState = () => {}
const render = () => {}
```

지하철 노선도

## 상속

```js
class 새 {
    constructor(비행능력) {
        this.날개갯수 = 2
        this.비행능력 = 비행능력
        this.다리 = 2

        this.잠자기()
    }

    밥먹기() {
        this.잠자기()
    }

    잠자기() {
        console.log("자는중..")
    }
}

class 참새 extends 새 {
    constructor() {
        super()
    }

    밥먹기() {
        console.log("냠냠")
    }
}
```


```js

```

점심시간 1시간이후에  5교시
복습 

6교시 