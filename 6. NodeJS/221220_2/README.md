# Router 나누기

// board

// 2
// 

/root
|-- [-]models
|-- middlewares
|-- controllers
|-- [-]services
|-- routes
|-- public
|-- views
|-- server.js

```js
app.get("/", (req, res) => {})
```

router 안에 들어간 `callback(미들웨어)` 함수는
`요청객체`와 `응답객체` 를 주는 함수들입니다.

```js
const modifyController = (req,res)=>{
    const index = req.query.index
    // 데이터 조작
    items[index].subject = ...
    res.render('modify.html')
}
app.get('/modify', modifyController)
```

```js
app.get("/")
app.get("/list")
app.get("/write")
app.get("/view")
app.get("/modify")
app.get("/delete")
```

```js
const express = require("express")
const router = express.Router()
```

게시판이 2가지형태
board, notice, gallery

/api/board/list
/api/board/write
/api/board/view
/api/board/modify
/api/board/delete

/api/notice/list
/api/notice/write
/api/notice/view
/api/notice/modify
/api/notice/delete

/api/gallery/list
/api/gallery/write
/api/gallery/view
/api/gallery/modify
/api/gallery/delete

```sh
npm init -y
npm install express

```

```js
app.use(
    "/board/",
    router.get("/list", (req, res) => {
        res.send("/ page")
    })
)

if (req.path.include("/board")) {
    Router()
}

function Router(){
    if(req.method==='GET' && req.path='/board/list') {
        res.send('/ page')
    }
}

app.get("/", (req, res) => {})
```
