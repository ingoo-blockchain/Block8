# Javascript

    callback
    Promise
    async/await

```js
socket.on("data", (chunk) => {
    console.log(chunk)
})

// 콜백지옥 , 비동기코드를 처리하기 위함.
// 이벤트 기법이라는 것을 활용해서 처리했기 때문.
net.createServer((socket) => {
    socket.on("data", (chunk) => {
        const req = request(chunk)
    })
})

// 1. 서버를 연다
// 2. 데이터를 받는다.
const socket = net.createServer()
socket.on("data", (chunk) => {})
```
