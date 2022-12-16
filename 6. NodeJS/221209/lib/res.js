const message = (content) => {
    const body = Buffer.from(content)

    return `HTTP/1.1 200 OK
Connection:Close
Content-type:text/html; charset=UTF-8
Content-Length:${body.length}

${body.toString()}`
}

module.exports = (client) => {
    return {
        send: (body) => {
            const response = message(body)
            client.write(response)
        },
        sendFile: (body) => {},
    }
}
