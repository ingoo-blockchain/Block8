# Network

`net`라이브러리 사용해서 client 와 server 코드를 작성한적이있어요

`p2p` 라는건

`client`와 `server`측 코드를 모두 작동되는 서버

# Ethereum Bitcoin

TCP 기반으로 Node들과 통신을 진행함.

`Node` 들은 3가지의 `Port`를 가질수있다.
`웹브라우저` 또는 `클라이언트` 관련된 포트가 2개입니다.

-   http

    -   rpc

-   ws

`Node`들 끼리 상호작용 할 수 있는 `port`가 1개있습니다.

-   tcp

## 앞으로 만들어야할것

### node

-   http -> express
-   ws -> node들 peer

### 클라이언트

내가 가지고있는 돈은얼마있는지,
이돈을 상대방에게 주고싶다거나,

아주 심플하게 `wallet`

## P2P

어려운 스킬적으로 보일수는있는데요

프로그램
하나의 프로세스 <--

`client` 와 `server`

프로그램 <-- 즉 코드에서 client측코드와 server측코드를 구현한다는거에요

`server` socket open

front단에서 사용했던 client측 소켓 코드들과
back단에서 사용했던 server측 소켓 코드이
한 파일에 같이있는것

```js
io.emit("hello", { payload: "asdf" })
io.on("hello", (data: string) => {})
```
