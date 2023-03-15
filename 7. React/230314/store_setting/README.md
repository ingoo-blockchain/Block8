# Redux 기본 설정

```sh
npm install react-redux redux redux-thunk
```

react-redux : react에서 redux를 사용할수있게 도와주는 라이브러리

## 1. Store 만들어야합니다.

```jsx
const store = createStore(rootReducer)
console.log(store)
```


```js
const state = {
    board:[
        {}
    ],
    user: {

    },
    counter:{
        count:0
    },
    commnets:[
        
    ]

}
```