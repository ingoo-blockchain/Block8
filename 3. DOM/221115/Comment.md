# Comment

댓글 구현 - CRUD

## 작업내용

1. 댓글을 입력할수있다. (Creat)

    - 댓글 입력폼에 내용을 입력한 뒤 `submit` 을 누르면 리스트에 추가된다.
    - 만약 입력폼에 비어있는 상태에서 `submit` 을 누르면 경고 팝업이 띄움 (alert or modal)
    - 댓글을 성공적으로 처리가되면 입력폼을 `reset` 한다.

2. 댓글을 리스트로 볼수있다 (Read)

    - 댓글 내용은 `아이디` `댓글내용` `날짜` 로 표현한다.
    - 댓글 리스트는 최신순으로 나타낸다.
    - 댓글 총 갯수를 표현한다.
    - 삭제버튼이 존재한다.

3. 댓글을 수정할 수 있다 (Update)

    - 댓글 리스트에서 내용을 _클릭_ 하면 **input box**로 변경된다
    - input value값을 `클릭한 내용`을 유지한다.
    - input 내용을 `enter`를 누르면 수정된다.

4. 댓글을 삭제할 수 있다 (Delete)

    - 해당 리스트의 삭제버튼을 _클릭_ 하면 안내창을 띄운다.
    - 안내창에서 확인버튼 누르면 삭제를 진행
    - 안내창에서 취소버튼 누르면 아무런 변화를 하지 않는다.

## 설명

기본적으로 CRUD 작업할떄 `C` 를 먼저 작업을 진행함.

Create 작업시 Read와 연관성이 높다.
데이터를 어떻게 저장하는지
변수에 어떻게 넣을거냐~

### Create 설명

Object, Array

변수하나에 데이터 여러개 담을수있음!
객체, 배열을 같이써야 되는 상황이에요 `Object[]`

리스트를 표현할땐 배열이 좋은거같고,
하나의 댓글에 내용을 표현할때는 객체가 좋은거같다.
그래서 데이터타입이 `Object[]` 가 될것같다.

```js
const list = [
    {
        userid: "web7722",
        comment: "내용내용내용~~",
        date: "2022-11-15",
    },
    {
        userid: "web7722",
        comment: "내용내용내용~~",
        date: "2022-11-15",
    },
    {
        userid: "web7722",
        comment: "내용내용내용~~",
        date: "2022-11-15",
    },
]
```

문제
학생을 객체로 표현하세요

문제
학생리스트를 만드세요!

```js
const students = []

const person = {
    name: "곽인구",
    age: 32,
}

const person2 = {
    name: "장준영",
    age: 28,
}

students.push(person)
students.push(person2)
```

생성자 함수!

```js
function Person(name, age) {
    this.name = name
    this.age = age
}

const person1 = new Person("곽인구", 32)
const person2 = new Person("장준영", 28)

students.push(person1, person2)
```

Class

```js
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const person1 = new Person("곽인구", 32)
const person2 = new Person("장준영", 28)

students.push(person1, person2)
```

### Read 설명

어떤 데이터를 보여줄거냐

```js
const list = [
    { userid: "web7722", content: "안녕하세요1", date: "2022-11-15" },
    { userid: "web7722", content: "안녕하세요2", date: "2022-11-15" },
    { userid: "web7722", content: "안녕하세요3", date: "2022-11-15" },
]
```

어떤 형태로 표현할거냐

```html
<ul class="comment-row">
    <li class="comment-id">web7722</li>
    <li class="comment-content">안녕하세요1</li>
    <li class="comment-date">2022-11-15</li>
</ul>

<ul class="comment-row">
    <li class="comment-id">web7722</li>
    <li class="comment-content">안녕하세요2</li>
    <li class="comment-date">2022-11-15</li>
</ul>

<ul class="comment-row">
    <li class="comment-id">web7722</li>
    <li class="comment-content">안녕하세요3</li>
    <li class="comment-date">2022-11-15</li>
</ul>
```

그러면 나는 javascript를 통해서

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

일단 이런식을 만들수있는가

```js
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")

ul.append(li1)
ul.append(li2)
ul.append(li3)

ul.setAttribute("class", "comment-row")
li1.setAttribute("class", "comment-id")
li2.setAttribute("class", "comment-content")
li3.setAttribute("class", "comment-date")

const obj1 = {}
const obj2 = {}
const obj3 = {}

obj2.name = "ingoo"
console.log(obj1.name) // ??
```

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```
