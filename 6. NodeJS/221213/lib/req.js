const msg = `GET /user?name=ingoo&age=32 HTTP/1.1
Host: localhost:3000
Connection: keep-alive
Cache-Control: max-age=0
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
Content-Type: application/json

{
    "name":"ingoo",
    "age":32
}`

const getQuery = (queryString) => {
    if(queryString === undefined) return null
    return queryString.split("&").map(v=>v.split('=')).reduce((acc,value)=>{
        const [key, val] = value 
        acc[key] = val
        return acc
    },{})
}

const bodyParser = (body, contentType) => {
    if (contentType === undefined) return null

    if(contentType.indexOf('application/json') !== -1) return JSON.parse(body)
    if(contentType.indexOf('application/x-www-form-urlencoded') !== -1) return getQuery(body)

    return body
}

const getMessage = (message) => {
    let flag = false
    let body = ''

    for(const key in message) { 
        if(flag) body = message.splice(key).map(v=>v.trim()).join("")
        if(message[key] === "") flag = true
    }
    message.pop()

    const headers = message.map(v=>v.split(":")).reduce((acc,value)=>{
        const [key,val] = value
        acc[key] = val
        return acc
    },{})

    body = bodyParser(body, headers['Content-Type'])

    return [headers, body]
}

const parser = (message) => {
    const header = message.split('\r\n')
    const [method, url, version] = header.shift().split(' ')
    const [path, queryString] = url.split("?")
    const query = getQuery(queryString)

    const [headers, body] = getMessage(header)

    return {method, url, version, path, queryString, query, headers, body}
}

module.exports = parser