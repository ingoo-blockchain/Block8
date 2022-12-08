const incodeMesage = (obj) => {
    obj["content-length"] = Buffer.from(obj.body).length

    const arr = Object.keys(obj)
        .filter((v) => v !== "body")
        .map((v) => v + ":" + obj[v])
        .join("\r\n")

    const text = `${arr}\r\n${obj.body}`
    return text
}

const decodeMessage = (message) => {
    message = message.replaceAll(" ", "")
    const arr = message.split("\r\n").filter((v) => v !== "")

    const body = arr.pop()
    const [method, url, version] = arr.shift().split(" ")
    const [path, queryString] = url.split("?")
    const query = queryString
        .split("&")
        .map((v) => v.split("="))
        .reduce((acc, value) => {
            const [key, val] = value
            acc[key] = val
            return acc
        }, {})

    console.log(method, version, url, path, query)

    const headers = arr
    const header = headers.reduce((acc, value, index) => {
        const [key, val] = value.split(":") // [reply, true]
        acc[key] = val
        return acc
    }, {})

    console.log(header)

    const result = {
        method,
        path,
        url: header.host + url,
        query,
        headers: header,
        body,
    }

    return result
}

// 객체 리터럴
module.exports = {
    incodeMesage,
    decodeMessage,
}
