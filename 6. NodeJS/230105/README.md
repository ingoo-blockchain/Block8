# client

-   요청을 잘보내고 잘받기

# Server

```javascript
const request = ({ method, path, body }) => {
    return new Promise((resolve, reject) => {
        const host = `http://localhost:3000`
        const xhr = new XMLHttpRequest()
        xhr.open(method, `${host}${path}`)
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send(JSON.stringify(body))

        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.response))
            } else {
                reject(`ERR`)
            }
        }
    })
}

;(async () => {
    // XMLHttpResponse javascript 내장
    const ajax = await request({ method: "get", path: "/comments", body: null })
    console.log(ajax)

    // Fetch javascript 내장
    const response = await fetch("http://localhost:3000/comments", {
        method: "get",
        headers: {
            "Content-type": "application/json",
        },
        body: null,
    })

    const body = await response.json()
    console.log(body)

    // axios 외부에서 만든거. XMLHttpResponse
    // <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    // https://axios-http.com/kr/docs/example

    const res = await axios.get("http://localhost:3000/comments")
    const res2 = await axios.post("http://localhost:3000/comments", {
        content: "asdfasdf",
    })
})()
```
