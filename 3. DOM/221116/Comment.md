# Comment

댓글 구현 - CRUD

## 작업내용

1. 댓글을 입력할수있다. (Creat)

    - 댓글 입력폼에 내용을 입력한 뒤 `submit` 을 누르면 배열에 추가된다.
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

```js
const commentFrm = document.querySelector("#commentFrm")
const commentList = document.querySelector("#comment-list")
const state = []

function submitHandler(e) {
    e.preventDefault()
    console.log("hello world!")
}

commentFrm.addEventListener("submit", submitHandler)
```

form 폼 Element 안에 input `value` 가져오는것을 목표를잡고

```js
console.log(e.target.content.value)
```

e.target 까지 내용
e.target.content 까지 내용
e.target.content.value 까지 내용

## Create

고유한 번호를 만들기 위해서 - `index` `고유번호` `key값`

## Read

고유한 번호를 남기기 위해 - `index` `고유번호` `key값`

## Update

update, delete 해당 `index` `고유번호` `key값`

Update는 가장중요한것은 내가 어떤 `댓글` 을 수정할지 알아야합니다.
우리는 `create` `read` 를 구현했을때

`array` 에다가 데이터를 보관하고있어요.

```js
const students = []

const person1 = {
    name: "곽인구",
    age: 32,
}

const person2 = {
    name: "황상범",
    age: 30,
}

const person3 = {
    name: "박경철",
    age: 28,
}

students.psuh(person1)
students.psuh(person2)
students.psuh(person3)

students.splice(0, 1) // [황상범, 박경철]

students[0].age = 27
```

#### dataset

```html
<div id="header" data-index="5"></div>
```

```js
const header = document.querySelector("#header")
console.log(header.dataset.index) // 5
```

댓글 리스트에서
댓글내용에 클릭이벤트를 넣고싶습니다.

1. hello world!
2. 댓글 내용에 해당하는 index를 출력

## Delete

삭제가 제일 쉬워요

버튼을 클릭하면 해당 인덱스 찾아와요
splice 만 진행하고

다시 그리기.. 끝..
