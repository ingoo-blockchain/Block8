# React Page

**app.jsx**

1. useContext
2. react-router-dom

## login 을 구현할때

문제어떻게 해결하는지 ..

## App.jsx

-   react-router-dom
    -   header
        -   layouts
            -   ...

# React

데이터가 바뀌면 화면이 바뀐다.

# 상태 관리

화면에 필요한 데이터 - Front
서비스 필요한 데이터 - Back

로그인 만든다고 가정해보면

userid, userpw

Input 박스에 사용자가 아이디와 패스워드를 입력합니다.

Backend 에다가 요청을 보내게 됩니다.

Backend 는 front 에게 응답을 줍니다.

200 OK

set-cookie : token=asdfasdffasdf.asdfasdfasdf.asdfasdf

front {token:asdfasdffasdf.asdfasdfasdf.asdfasdf}
isLogin : false -> true

어떻게 저장되어잇을까 ?

```js
let isLogin = false

isLogin = true

// 새로고침 후
console.log(isLogin) // false
```

`JS` 에서 변수를 어떻게 영구적으로 저장할까요 ?
`React`는 어떤 런타임을 사용하고있죠?

`localStorage` 에 저장

islogin = false

`localStorage` 있니 ?
있구나.. 있으면 로컬스토리지에 있는 변수내용을 islogin에다가 넣어줘.

라이브러리가 존재합니다.
