const fs = require('fs')
const path = require('path')

// __dirname : /mnt/c/Users/pc-007/Documents/block8/6. NodeJS/221212 + /src/index.html 
// __filename : /mnt/c/Users/pc-007/Documents/block8/6. NodeJS/221212/1.js 

const filename = path.join(__dirname, './src/index.html')
console.log(filename)

// 비동기 
// 1. 파일경로 + 파일명 
// 2. 인코딩 [옵션]
// 3. 콜백 
let text = ''
fs.readFile(filename, 'utf8', (error, data)=>{
    if(error) console.log(error)
    console.log(data)
    text = data
})
console.log(text) // ''

// 동기

const data = fs.readFileSync(filename)
console.log('sync : ',data)

console.log('hello world!')
