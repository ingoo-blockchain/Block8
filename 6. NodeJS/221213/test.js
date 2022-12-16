// fs 시스템

// fs.readdir 
// fs.readdirSync === ls : array 
const fs = require('fs')
const path = require('path')

// 경로
const searchPath = path.join(__dirname, 'public')
const dir = fs.readdirSync(searchPath)

// console.log(dir) // [ 'css', 'images', 'js','1.js' ]

// fs.stat(경로)  해당경로에있는 디렉토리 또는 파일의 정보를 나타내줍니다. 파일인지,,, 디렉토리,,
// return 객체입니다. method 
// isFile() 
for (const index in dir) {
    console.log(dir[index])
}

const find = path.join(searchPath,'1.js')
const isFile = fs.statSync(find).isFile() // Object
console.log(isFile) // boolean


// 해당디렉토리에 있는 내용들
// 내용들이 파일인지 폴더인지. 

// 만들것 

/*
{
    '/css/index.css':'index.css',
    '/css/header/index.css':'index.css',
    '/imgeas/1.jpg':'1.jpg',
    '/js/index.js':'index.js',
    '/1.js:'1.js'
}
*/

// 해당내용이 디렉토리일경우,
// 해당내용이 파일일경우