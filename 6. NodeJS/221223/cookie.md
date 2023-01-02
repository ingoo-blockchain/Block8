# HTTP 


```sh
npm init -y
npm install express nunjucks
```


```javascript
const server = net.createServer((client) => {
    client.setEncoding("utf8")

    client.on("data", (chunk) => {
        const req = reqParser(chunk)
        const res = message(client, req)
        const public = static('../public')

        for( const key in public ) {
            if(req.method === 'GET' && req.path === key) {
                res.sendStatic(key,req)
            }
        }

        if(req.header.cookie){
            req.cookie = req.header.cookie
        }

        // http://127.0.0.1:3000 /
        if (req.method === "GET" && req.path === "/") {
            console.log(req.hello)
            res.send("<h1>Hello World!<a href='/user'>user</a></h1>")
        // http://127.0.0.1:3000/user
        } else if (req.method === "GET" && req.path === "/user") {
            const name = req.query?.name
            console.log(req, name)
            res.sendFile("index.html", { name, title: "homepage" })
        } else if(req.method === 'POST' && req.path === '/user') {
            console.log('req: ',req)
            const subject = req.body?.subject
            res.redirect(`/user?name=${subject}`)
        } else {
            res.send("Not Found")
        }
    })
})
```