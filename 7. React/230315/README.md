# Redux 

## Front
```sh
npm install react-router-dom redux redux-thunk react-redux axios styled-components
```

## Back
```sh
npm install express cors
```


## express

cors 
body-parser 

GET /categories 


## React Setting

1. React-Router-dom 설정
    - 1.2 Header 만들기 `<NavLink>` 잘 작동되는지 
    - 1.3 Header 를 만들면서 디렉토리 구조 styled-components 설정

- BrowserRouter
    - Routes
        -Route


2. react-redux 설정
    - 2.1 Provider
    - 2.2 Provider 안에있는 Store 해결 
    - 2.3 Store 생성시 rootReducer 만들기

3. rootReducer - combineReducers 로 쪼개기 
    - 3.1 combineReducers 설정
    - 3.2 초기 상태값 설정 <- redux devtools 로 확인하기
        - 3.2.1 redux devtools 설치
        - 3.2.2 redux devtools 설정
        ```sh
            npm install -D redux-devtools-extension
        ```
    - 3.3 reducer 각각 쪼개서 만들기

4. reducer 최소 하나 이상이 만들어졌음.
    4.2 reducer types 만들기
    4.3 reducer actions 만들기 <생략> 

5. 미들웨어 장착 (thunk)
    5.1 createStore  두번째 인자값에 넣어주기.
    5.2 thunk 테스트..
    ```js
    // thunk 를 test 를 하기 위해서는 dispatch 를 사용해야한다. 
    ```



### 미들웨어

상태를 바꾸기전에, 무언가를 조작하고 상태를 바꾸고싶다.
상태를 바꾸기전에 통신결과를 알고 상태를 바꾸고 싶다.

상태바꾸는 메서드를 작성하면, 바로 요청때리고, 응답받고 응답에대한 결과물로 상태를 변경




```js
const state = {
    category: {
        loadding:true,
        error:null,
        data:[{...},{...}]
    }
}
```
