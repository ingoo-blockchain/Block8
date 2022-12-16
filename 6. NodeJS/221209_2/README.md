# express

```sh
npm init -y  #package.json 생성
npm install express
```

**server.js**

```js
const express = require("express")
const app = express() // app

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log(`server start`)
})
```
