# React

hook

-   useCallback
-   useMemo
-   memo

메모이제이션 <--
피보나치수열 한번다시해보세요.
메모제이션
캐시

-   useContext
-   useReducer

Function Component 로 구현했을대,
리랜더링이 발동되면, 안에 들어가있는 코드들
상태 혹은 함수 혹은 변수들이 다시 실행된다.

## useCallback

## useMemo

## useContext

-   전역 상태를 관리하기 위해.

-   useContext

## useReducer

-

컴퓨터구조

## 상태바꾸기

// hook 

this.state = {
user:{

    },
    board:{

    },
    next:false

}

```js
const nextUpdate = {
    ...this.state,
    user: { ...this.state.user },
    board: { ...this.state.board },
    next: true,
}

this.setState(nextUpdate)
```

코드 작성


```js
useReducer(function값, 초기상태값 ) : [상태값상태를바꾸는 함수]
// 초기값은 대부분 Object로 넣음.

const intialState = {}
const reducer = (state)=>{
    console.log(state)
}
const [state, dispatch] = useReducer(reducer, intialState)



```