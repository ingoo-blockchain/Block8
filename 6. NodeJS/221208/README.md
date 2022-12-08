# TCP

L4 - Port
L3 - IP

프로그램 , 프로세스 차이

프로그램 - 코드
프로세스 - 코드를 실행시킨아이

x o
프로세스, 스레드
데이터공유 여부

프로세스끼리 데이터를 공유할려면 어떻게 해야된다 ?

통신으로 데이터 공유해야한다.

OSI 7계층
컴퓨터의 네트워크를 계층별로 설명한거다
인터넷, TCP, Socket ,어플리케이션

프로세스 2개 만들겁니다.

**server.js**
**client.js**

TCP <-- 커널 OS

NodeJS TCP통신할수있는 내장모듈 `net`

`net` TCP 통신

TCP 특징 - Port

연결이 있다 - 논리적
(Connection, Session)
순서 있다

**server.js**

```js
const net = require("net")
const port = process.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST || "127.0.0.1"
const server = net.createServer()

server.listen(port, host, () => {
    console.log(`server start`)
})
```


net
- clinet
- server


net.createServer() // server
net.connect() // client
