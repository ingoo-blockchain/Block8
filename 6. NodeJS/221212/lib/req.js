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
    // 'name=ingoo&age=32' --> {name:'ingoo', age:32}
    // 'name=ingoo&age=32' --> ['name=ingoo', 'age=32']
    // ['name=ingoo', 'age=32'] --> [['name', 'ingoo'], ['age',32]]
    // [['name', 'ingoo'], ['age',32]] --> {name:'ingoo', age:32}
    return queryString.split("&").map(v=>v.split('=')).reduce((acc, value)=>{
        const [key, val] = value
        acc[key] = val 
        return acc
    },{})
}

const bodyParser = (body, type) => {
    if (type === undefined) return null
                                                        
    if (type.indexOf('application/json') !== -1) return JSON.parse(body)
    if (type.indexOf('application/x-www-form-urlencoded') !== -1) return getQuery(body)
    return body
}

const getMessage = (line) => {
    let flag = false
    let body = ''
    for (const key in line) {
        if(flag) body = line.splice(key).map(v=>v.trim()).join("")
        if(line[key] === "") flag = true
    }
    line.pop()
    // ['Host: localhost:3000', 'Connection: keep-alive'] -> [ [Host,localhost:3000],[Connection,keep-alive] ]
    const headers = line.map(v=>v.split(":")).reduce((acc, value)=>{
        const [key,val] = value
        acc[key]=val
        return acc
    },{})

    body = bodyParser(body, headers['Content-Type']) // {}
    return [headers, body]
}

const parser = (message) => {
    // string --> object 
    // @TODO : startline
    // @TODO : header, body 분리 하기 
    // @TODO : header, body 객체 만들기

    // message  : request message 
    const header = message.split('\n') // []
    const [method, url, version] = header.shift().split(' ') // ['GET','/user?name=ingoo&age=32','HTTP/1.1']
    // '/user?name=ingoo&age=32'
    const [path, queryString] = url.split('?') // ['/user','name=ingoo&age=32']
    const query = getQuery(queryString)

    const [headers, body] = getMessage(header)

    return {method, url, version, path, queryString, query,headers, body}
}

module.exports = parser
