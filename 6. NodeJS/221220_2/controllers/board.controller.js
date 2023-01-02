const items = []

exports.list = (req, res) => {
    console.log(req.login)
    req.login = "hello"
    res.send("list page.")
}

exports.write = (req, res) => {
    res.send("write page.")
}

exports.modify = (req, res) => {
    res.send("modify page.")
}
