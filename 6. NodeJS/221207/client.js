const net = require("net")

const config = { port: 3000, host: "127.0.0.1" }
const socket = net.connect(config)

socket.on("connect", () => {
    console.log("connected to server!")

    socket.write("나 데이터 보낸다!")
})

socket.on("data", (chunk) => {
    console.log(` Received : ${chunk} `)
    socket.end()
})

// HTTP 기본적으로 TCP 통신을 합니다.
// TCP 통신은 쌍방향 통신이 가능하다. (확인)
// HTTP 프로토콜의 규격을 우리는 브라우저의 요청만으로도
// 브라우저 -> http://127.0.0.1:3000
// 나의 TCP Server가 받을수있게.
