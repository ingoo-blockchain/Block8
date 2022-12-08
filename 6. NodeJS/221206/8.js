const path = require("path")

// 내가 실행한 위치를 출력 + 9.js

// /mnt/c/Users/pc-007/Documents/block8/6. NodeJS/221206

// if (process.platform === "win32") {
//     console.log(__dirname + "\\9.js")
// } else {
//     console.log(__dirname + "/9.js")
// }

console.log(path)
const newPath = path.join(__dirname, "9.js")
console.log(newPath)
