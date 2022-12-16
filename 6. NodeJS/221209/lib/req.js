const msg = `GET /user?name=ingoo&age=32 HTTP/1.1
Host: localhost:3000
Connection: keep-alive
sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7

{
    name:'ingoo',
    age:'32',
}`

// 127.0.0.1:5500?index=1

const getQuery = (queryString) => {
    if (queryString === undefined) return null
    // name=ingoo&age=32 -> {name:'ingoo', age:32}
    // @TODO : & 배열로나누기  // name=ingoo&age=32 -> [name=ingoo,age=32] -> [[name,ingoo],[age,32]]
    // {[name,ingoo],[age,32]} -> {name:'ingoo', age:32}
    return queryString
        .split("&")
        .map((v) => v.split("="))
        .reduce((acc, value) => {
            // [name,ingoo]
            const [key, val] = value
            // const key = value[0]
            // const val = value[1]
            acc[key] = val
            return acc
        }, {})
}

const getHeader = (arr) => {
    // 'Host: localhost:3000'
    // console.log(arr) // [[key,value], [key,value], [key,value], [host,localhost,3000]]
    // @TODO : header 객체 만들기
    return arr
        .map((v) => v.split(":"))
        .reduce((acc, value) => {
            let [key, val, port] = value
            if (port !== undefined) val += `:${port}`
            acc[key] = val
            return acc
        }, {})
}

const getBody = (line) => {
    let flag = false
    let body = ""
    for (const key in line) {
        if (flag) {
            body = line
                .splice(key)
                .map((v) => v.trim())
                .join("")
        }
        if (line[key] === "") flag = true
    }
    line.pop()
    const headers = getHeader(line)
    return [headers, body]
}

const parser = (message) => {
    // @TODO : startline
    // @TODO : header , body 분리
    // @TODO : header 객체 만들기

    // @TODO : startline
    const header = message.split("\r\n")
    const [method, url, version] = header.shift().split(" ") // string -> array ['GET', '/user?name=ingoo&age=32', 'HTTP/1.1']
    // const startline = header.shift().split(" ")
    // const method = startline[0]
    // const url = startline[1]
    // const version = startline[2]
    const [path, queryString] = url.split("?") // ['/user','name=ingoo&age=32']
    // const uri = url.split("?")
    // const path = uri[0]
    // const queryString = uri[1]
    const query = getQuery(queryString) // {name:'ingoo', age:'32'}

    // @TODO : header , body 분리
    const [headers, body] = getBody(header)
    // const a = getBody(header) // []
    // const headers = a[0]
    // const body = a[1]

    // return {
    //     method:method,
    //     path:path,
    //     version:version,
    //     url:headers.Host + url,
    //     query:query,
    //     headers:headers,
    //     body:body
    // }
    return {
        method,
        path,
        version,
        url: headers.Host + url,
        query,
        headers,
        body,
    }
}

module.exports = parser
