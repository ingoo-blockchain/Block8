// const division = (arr, n) => {
//     const { length } = arr
//     const divide = Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0)
//     const newArr = []

//     for (let i = 0; i <= divide; i++) {
//         newArr.push(arr.splice(0, n))
//     }

//     return newArr
// }

const getQuery = (queryString) => {
    if (queryString === undefined) return null
    return queryString
        .split("&")
        .map((v) => v.split("="))
        .reduce((acc, value) => {
            const [key, val] = value
            if (val.indexOf("%") !== -1) {
                acc[key] = decodeURIComponent(val)
            } else {
                acc[key] = val
            }

            return acc
        }, {})
}

const bodyParser = (type, body) => {
    if (type === undefined) return body
    if (type.indexOf("application/json") !== -1) return JSON.parse(body)
    if (type.indexOf("application/x-www-form-urlencoded") !== -1) return getQuery(body)
}

module.exports = (message) => {
    const header = message.split("\r\n")
    const [method, url, version] = header.shift().split(" ")

    let body
    let line = false
    for (const key in header) {
        // console.log(line)
        if (line) {
            body = header
                .splice(key)
                .map((v) => v.trim())
                .join("")
        }
        if (header[key] === "") line = true
    }

    // console.log(method, url, version, header, body)
    const [path, queryString] = url.split("?")
    // console.log(path, queryString)
    const query = getQuery(queryString)
    // console.log(query)

    const headers = header
        .filter((v) => v !== "")
        .reduce((acc, val) => {
            const [key, value] = val.split(":")
            acc[key] = value
            return acc
        }, {})
    console.log(headers)
    console.log(headers["Content-Type"])

    body = bodyParser(body)
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

// const msg = `GET /?name=ingoo HTTP/1.1
// User-Agent: PostmanRuntime/7.28.4
// Accept: */*
// Postman-Token: 75df8e10-12bb-401d-ba93-f573b0806af4
// Host: 127.0.0.1:3000
// Accept-Encoding: gzip, deflate, br
// Connection: keep-alive
// Content-Type: application/x-www-form-urlencoded
// Content-Length: 10

// name=ingoo`
// console.log(req(msg))
