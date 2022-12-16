const fs = require("fs")
const zlib = require("zlib")
const path = require("path")
const defaultDir = "views"
const targetDir = "./"

module.exports = (filename, obj, defaultDir='views') => {
    const target = path.join(targetDir, defaultDir, filename)
    const readline = fs.readFileSync(target, "utf8").split("\n")
    for (const i in readline) {
        console.log("read", i, ":", readline[i])
        const start = readline[i].indexOf("{{")
        const end = readline[i].indexOf("}}")
        if (start > 0 && end > 0) {
            const searchText = readline[i].substring(start, end + 2)
            const key = searchText.replaceAll("{{", "").replaceAll("}}", "")
            for (const index in obj) {
                if (key !== index) continue
                readline[i] = readline[i].replaceAll(searchText, obj[index])
            }
        }
    }
    return readline.join("")
}
//console.log("Data Compressed...")
// const gzipPromise = (body) =>
//     new Promise((resolve, reject) => {
//         zlib.gzip(body, (err, res) => {
//             if (err) return reject(err)
//             return resolve(res)
//         })
//     })

// ;(async () => {
//     const a = await gzipPromise(file)
//     console.log(a)
// })()
