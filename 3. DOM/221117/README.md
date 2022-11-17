# 댓글 만들기

-   submitHandler

    -   state:[]
        데이터를 쌓기

-   instance:Object
    -   new Commnet(value)
-   value : Text 입력한 값

```js
const state = [{
    userid:'web7722'
    content:'input박스 내용',
    updated:false,
    updateValue:''
    now:'....'
},{
    userid:'web7722'
    content:'input박스 내용',
    updated:false,
    updateValue:''
    now:'....'
},{
    userid:'web7722'
    content:'input박스 내용',
    updated:false,
    updateValue:''
    now:'....'
}]

console.log(state[2].content)

const instance = {
    userid:'web7722'
    content:'input박스 내용',
    updated:false,
    updateValue:''
    now:'....'
}


addComment(instance)

state.push(instance)
/*
[] ->

[
    {
        userid:'web7722'
        content:'input박스 내용',
        updated:false,
        updateValue:''
        now:'....'
    }
]
*/
```

### drawing() 역활

state 배열 안에있는 객체를
Element로 바꿔주는 아이

내가 화면에 무엇가를 바꾸고싶다.

1. state 변수에 있는 내용을 수정한다.
2. state 변수에 있는 내용으로 화면은 만든다.

데이터가바뀌면 화면이바뀐다.
